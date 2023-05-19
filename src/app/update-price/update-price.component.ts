import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { AllservicesService, PriceSign } from '../service/allservices.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.scss']
})
export class UpdatePriceComponent {
  dataSource: any;
  hideRequiredControl = new FormControl(false);
  incrementalValue = new FormControl();
  panalID = new FormControl();
  productID = new FormControl();
  productName = new FormControl();
  productPrice = new FormControl();
  fuelindicator: Observable<PriceSign[]> | undefined;

  constructor(private service: AllservicesService) {
    this.loadPriceList();
  }


  displayedColumns: string[] = ['panalID', 'productID', 'productName', 'productPrice', 'updatedAt', 'updatedBy' ];
  @ViewChild(MatPaginator) paginator !: MatPaginator;





  onClick() {
    console.log(this.hideRequiredControl.value);
    console.log(this.incrementalValue.value);
  }

  loadPriceList() {
    this.fuelindicator = this.service.getPriceSign();
    this.service.getPriceSign().subscribe(response => {
      
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      console.log(response);
    });
  }
}

