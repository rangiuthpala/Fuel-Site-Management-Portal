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

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  constructor(private service: AllservicesService) {
    this.loadDeliveryTotals();
  }

  registerform = new FormGroup({
    fromDate: new FormControl(new Date().toISOString().slice(0, 10)),
    toDate: new FormControl(new Date().toISOString().slice(0, 10))
  });

  loadDeliveryTotals() {
    this.service.getAllDeliveryTotals('2022-01-01','2023-05-03').subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
       this.dataSource.paginator=this.paginator;
      console.log(this.registerform.value);
    });
  }
}



