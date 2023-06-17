import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { AllservicesService } from "../service/allservices.service";


@Component({
  selector: "app-dispenser-status",
  templateUrl: "./dispenser-status.component.html",
  styleUrls: ["./dispenser-status.component.scss"],
})
export class DispenserStatusComponent{

  constructor(private service: AllservicesService, private builder:FormBuilder) {
    this.loadDeliveryTotals();
  }

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  dataSource: any;
  dataSourceDispenser: any;
  dataSourceElectronic: any;

  registerform = new FormGroup({
    fromDate: new FormControl<Date | null>(new Date()),
    toDate: new FormControl<Date | null>(new Date())
  });


  displayedColumns: string[] = ['deliveryID', 'productID', 'productName', 'Volume', 'price', 'amount', 'transDate', 'transTime'];
  displayedColumnsdispenser: string[] = ['dispenser', 'dispenserState', 'nozzleState', 'amount', 'volume'];  
  displayedColumnsElectronic: string[] = ['terminal', 'pump', 'productID', 'amount', 'volume'];


  loadDeliveryTotals() {
    const fromD = this.service.formatDateNew(this.registerform.value.fromDate?.toString());
    const toD = this.service.formatDateNew(this.registerform.value.toDate?.toString());
    this.service.getAllDeliveryTotals(fromD, toD).subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator=this.paginator;
    });
  }

  electronicform = new FormGroup({
    atDate: new FormControl<Date | null>(null)
  });


  loadElectronicTotals() {
    const atDate = this.service.formatDateNew(this.electronicform.value.atDate?.toString());
    this.service.getAllElectronicTotals(atDate).subscribe(response => {
      console.log(atDate);
      this.dataSourceElectronic = new MatTableDataSource(response);
      this.dataSourceElectronic.paginator=this.paginator;
      // console.log(this.registerform.value);
    });
  }

}



