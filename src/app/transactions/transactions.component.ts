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
  receiptValue: string = '';
  

  registerform = new FormGroup({
    fromDate: new FormControl<Date | null>(new Date()),
    toDate: new FormControl<Date | null>(new Date()),
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

  viewReceipt(receipt:string) {
    console.log(receipt);
    this.receiptValue = receipt;
  }

  loadTrasnactionResponse() {
    const requestObj = {
      "fromDate": this.service.formatDateNew(this.registerform.value.fromDate?.toString()),
      "toDate": this.service.formatDateNew(this.registerform.value.toDate?.toString()),
      "searchText": this.registerform.value.searchText,
      "pumpID": this.registerform.value.pumpID,
      "terminalID": this.registerform.value.terminalID,
      "blendID": this.registerform.value.blendID
    };
    this.service.postTransactions(requestObj).subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator=this.paginator;
    });
  }
  displayedColumns: string[] = ['transactionId', 'terminalId', 'cardNumber', 'amount','transactionData', 'product', 'receipt'];
  
}
