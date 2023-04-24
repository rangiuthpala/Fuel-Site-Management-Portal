import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';  

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  card: number;
  product: string;
  receipt: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', card: 1, product: 'productname', receipt:'1' },
  {position: 2, name: 'Helium',  weight: 4.0026, symbol: 'He', card: 2, product: 'productname', receipt:'2' },
  {position: 3, name: 'Lithium',  weight: 6.941, symbol: 'Li', card: 3, product: 'productname', receipt:'3'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', card: 4, product: 'productname', receipt:'4'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', card: 5, product: 'productname', receipt:'5'},
  
];

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','card', 'product', 'receipt'];
  dataSource = ELEMENT_DATA;
  date = new FormControl(new Date());
}
