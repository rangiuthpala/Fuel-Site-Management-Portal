import { Component } from '@angular/core';

export interface PeriodicElementtwo {
  hoses: string;
  blend_name: string;
  tank_number: number;
  price_level: string;
  price_id:string;
}

const ELEMENT_two: PeriodicElementtwo[] = [
  {hoses: 'kjh', blend_name: 'sds', tank_number: 1.0079, price_level: 'H', price_id:'sss'}
];

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.scss']
})
export class LoopsComponent {
  checked = false;
  displayedColumnstwo: string[] = ['hoses', 'blend_name', 'tank_number', 'price_level', 'price_id'  ]
  dataSourcetwo = ELEMENT_two;
}
