import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllservicesService, PriceSign } from '../service/allservices.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.scss']
})
export class UpdatePriceComponent {
  dataSource: any;
  // hideRequiredControl = new FormControl(false);
  // incrementalValue = new FormControl();
  fuelindicator: PriceSign[] = [];


  constructor(private builder: FormBuilder, private service: AllservicesService, private toastr: ToastrService) {
    this.loadPriceList();
  }

  fuelPriceForm = new FormGroup({
    panalID: this.builder.control('', Validators.required),
    productID: this.builder.control('', Validators.required),
    productName: this.builder.control('', Validators.required),
    productPrice: this.builder.control('', Validators.required),
    incrementalValue: this.builder.control(''),
    hideRequiredControl: this.builder.control(false)
  });


  displayedColumns: string[] = ['panalID', 'productID', 'productName', 'productPrice', 'updatedAt', 'updatedBy' ];
  @ViewChild(MatPaginator) paginator !: MatPaginator;


  onSelect(row:PriceSign) {
    this.fuelPriceForm.setValue({
      panalID: row.panalID,
      productID: row.productID,
      productName: row.productName,
      productPrice: row.productPrice,
      incrementalValue: '',
      hideRequiredControl: false
    });
  }

  onClick() {
    if(this.fuelPriceForm.value.hideRequiredControl) {
      
      var y: number = this.fuelPriceForm.value.productPrice ? +this.fuelPriceForm.value.productPrice: 0;
      var x: number = this.fuelPriceForm.value.incrementalValue ? + this.fuelPriceForm.value.incrementalValue + y :  y;
      const requestObj = [{
        "panalID": this.fuelPriceForm.value.panalID,
        "productID": this.fuelPriceForm.value.productID,
        "productPrice": x.toFixed(4).toString(),
        "updatedBy": sessionStorage.getItem("name")
      }];
      this.service.updatePriceSign(requestObj).subscribe(response =>{
        console.log(response);
        if(response.isSucess) {
          this.toastr.info(response.message);
        } else {
          this.toastr.error(response.message);
        }
      });

    } else {
      
      const s: PriceSignUpdate[] = [];
      this.fuelindicator.forEach(element => {
        
        var x: number = this.fuelPriceForm.value.incrementalValue ? + this.fuelPriceForm.value.incrementalValue + +element.productPrice :  + element.productPrice;
        const u = {
          "panalID": element.panalID,
          "productID": element.productID,
          "productPrice": x.toFixed(4).toString(),
          "updatedBy": sessionStorage.getItem('name') ? String(sessionStorage.getItem('name')) : ''
        };

        s.push(u);
        console.log(u);
      });

      this.service.updatePriceSign(s).subscribe(response =>{
        console.log(response);
        if(response.isSucess) {
          this.toastr.info(response.message);
        } else {
          this.toastr.error(response.message);
        }
      });

    }
  }

  loadPriceList() {
    this.service.getPriceSign().subscribe(response => {
      this.fuelindicator = response;
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
    });
  }

  clearFields() {
    this.fuelPriceForm.reset();
  }
}

export interface PriceSignUpdate {
  panalID: string,
  productID: string,
  productPrice: string,
  updatedBy: string
}

