import { Component, VERSION } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-total-sales',
  templateUrl: './total-sales.component.html',
  styleUrls: ['./total-sales.component.scss']
})
export class TotalSalesComponent {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  
  defaultValue = { hour: 13, minute: 30 };

  timeChangeHandler(event: any) {}

  invalidInputHandler() {}
}
