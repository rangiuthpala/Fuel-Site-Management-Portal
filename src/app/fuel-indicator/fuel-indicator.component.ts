import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllservicesService, Fuelindicator } from '../service/allservices.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fuel-indicator',
  templateUrl: './fuel-indicator.component.html',
  styleUrls: ['./fuel-indicator.component.scss']
})
export class FuelIndicatorComponent {

  fuelindicator: Observable<Fuelindicator[]> | undefined;

  date = new FormControl(new Date());

  constructor(private service: AllservicesService) {
    this.reloadData();
  }

  reloadData() {
    const dateNew = this.service.formatDateNew(this.date.value?.toLocaleDateString());
    this.fuelindicator = this.service.getFuelIndicatorlist(dateNew);

  }

}
