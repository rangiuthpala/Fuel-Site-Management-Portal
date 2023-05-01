import { Component, ViewChild } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';  
import { AllservicesService } from '../service/allservices.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  constructor(private service: AllservicesService, private builder:FormBuilder) {
    this.loadPumps();
    this.loadFuelGrades();
    this.loadTerminals();
  }

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  
  pumpDataSource: any;
  fuelDataSource: any;
  terminalsDataSource: any;
  dataSource: any;
  receiptValue: any;
  

  registerform = new FormGroup({
    fromDate: new FormControl(new Date().toISOString().slice(0, 10)),
    toDate: new FormControl(new Date().toISOString().slice(0, 10)),
    searchText: this.builder.control(''),
    pumpID: this.builder.control(''),
    terminalID: this.builder.control(''),
    blendID: this.builder.control('')
  });


  loadPumps() {
    this.service.getAllPums().subscribe(response => {
      this.pumpDataSource = response;
    });
  }

  loadFuelGrades() {
    this.service.getAllFuelGrades().subscribe(response => {
      this.fuelDataSource = response;
    });
  }

  loadTerminals(){
    this.service.getAllTerminals().subscribe(response => {
      this.terminalsDataSource = response;
    });
  }

  viewReceipt(receipt:any) {
    console.log(receipt);
    this.receiptValue = receipt;
  }


  loadTrasnactionResponse() {
    this.service.postTransactions(this.registerform.value).subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator=this.paginator;
      console.log(this.registerform.value);
    });
  }
  displayedColumns: string[] = ['transactionId', 'terminalId', 'cardNumber', 'amount','transactionData', 'product', 'receipt'];
  
}
