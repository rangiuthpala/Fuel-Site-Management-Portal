import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {FormGroup, FormControl} from '@angular/forms';
import { error } from "highcharts";
import { AllservicesService } from "../service/allservices.service";


@Component({
  selector: "app-dispenser-status",
  templateUrl: "./dispenser-status.component.html",
  styleUrls: ["./dispenser-status.component.scss"],
})
export class DispenserStatusComponent{
  displayedColumns: string[] = ['deliveryID', 'productID', 'productName', 'Volume', 'price', 'amount', 'transDate', 'transTime'];
  // dataSource = ELEMENT_DATA;
  dataSource: any;
 

  displayedColumnsdispenser: string[] = ['dispenser', 'dispenserState', 'nozzleState', 'amount', 'volume'];
  dataSourceDispenser: any;

  dataSourceElectronic: any;
  displayedColumnsElectronic: string[] = ['terminal', 'pump', 'productID', 'amount', 'volume'];

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  atDate: any;
  constructor(private service: AllservicesService) {
    this.loadDeliveryTotals();
  }

  registerform = new FormGroup({
    fromDate: new FormControl<Date | null>(new Date()),
    toDate: new FormControl<Date | null>(new Date())
  });

  fromD = this.service.formatDateNew(this.registerform.value.fromDate?.toLocaleDateString());
  toD = this.service.formatDateNew(this.registerform.value.toDate?.toLocaleDateString());

  loadDeliveryTotals() {
    this.service.getAllDeliveryTotals(this.fromD,this.toD).subscribe(response => {
      console.log(this.fromD);
      console.log(this.toD);
      this.dataSource = new MatTableDataSource(response);
       this.dataSource.paginator=this.paginator;
      console.log(this.registerform.value);
    });
  }

  electronicform = new FormGroup({
    atDate: new FormControl(new Date())
  })

  loadElectronicTotals() {
    this.service.getAllElectronicTotals(this.atDate,).subscribe(response => {
      console.log(this.fromD);
      console.log(this.toD);
      this.dataSource = new MatTableDataSource(response);
       this.dataSource.paginator=this.paginator;
      console.log(this.registerform.value);
    });
  }

}



