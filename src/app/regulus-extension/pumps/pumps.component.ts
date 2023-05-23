import { Component } from '@angular/core';


export interface PeriodicElement {
  logical_id: number;
  physical_id: number;
  loop_id: number;
  protocol: string;
  model:string;
  stack_size: string;
  standalone_enabled: string;
  disabled: string;
}

export interface PeriodicElementtwo {
  hoses: string;
  blend_name: string;
  tank_number: number;
  price_level: string;
  price_id:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {logical_id: 1, loop_id: 12, physical_id: 1.0079, protocol: 'H', model:'sss', stack_size:'skjd', standalone_enabled:'aa', disabled: 'asdd'},
  {logical_id: 2, loop_id: 455, physical_id: 4.0026, protocol: 'He', model:'hshsh', stack_size:'skjd', standalone_enabled: 'sss', disabled: 'sf'},
  {logical_id: 3, loop_id: 55, physical_id: 6.941, protocol: 'Li', model:'sss', stack_size:'skjd', standalone_enabled: 'sdsd', disabled: 'sds'}
];

const ELEMENT_two: PeriodicElementtwo[] = [
  {hoses: 'kjh', blend_name: 'sds', tank_number: 1.0079, price_level: 'H', price_id:'sss'}
];

@Component({
  selector: 'app-pumps',
  templateUrl: './pumps.component.html',
  styleUrls: ['./pumps.component.scss']
})

export class PumpsComponent {
  displayedColumns: string[] = ['logical_id', 'physical_id', 'loop_id', 'protocol', 'model', 'stack_size', 'standalone_enabled', 'disabled'];
  dataSource = ELEMENT_DATA;
  displayedColumnstwo: string[] = ['hoses', 'blend_name', 'tank_number', 'price_level', 'price_id'  ]
  dataSourcetwo = ELEMENT_two;
}
