import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllservicesService, Fuelindicator } from '../service/allservices.service';

@Component({
  selector: 'app-fuel-indicator',
  templateUrl: './fuel-indicator.component.html',
  styleUrls: ['./fuel-indicator.component.scss']
})
export class FuelIndicatorComponent {

  fuelindicator: Observable<Fuelindicator[]> | undefined;

  constructor(private service: AllservicesService) {

  }

  ngOnInit() {
    console.log("inside ng")
    this.reloadData();
  }

  reloadData() {

    this.fuelindicator = this.service.getFuelIndicatorlist();

  }

}
