import { Component } from '@angular/core';


export interface PeriodicElement {
  name: string;
  logical_id: number;
  physical_id: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {logical_id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {logical_id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {logical_id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
];

@Component({
  selector: 'app-pumps',
  templateUrl: './pumps.component.html',
  styleUrls: ['./pumps.component.scss']
})

export class PumpsComponent {
  displayedColumns: string[] = ['logical_id', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
