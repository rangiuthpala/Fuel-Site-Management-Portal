import { Component, OnInit } from '@angular/core';
import { FuleIndicatorService } from './fule-indicator.service';
import { Observable } from 'rxjs';
import { Fuelindicator } from './fuelindicator';

@Component({
  selector: 'app-fuel-indicator',
  templateUrl: './fuel-indicator.component.html',
  styleUrls: ['./fuel-indicator.component.scss']
})
export class FuelIndicatorComponent {

  fuelindicator: Observable<Fuelindicator[]> | undefined;

  constructor(private fuelindicatorservice: FuleIndicatorService) {

  }

  ngOnInit() {
    console.log("inside ng")
    this.reloadData();
  }

  reloadData() {

    this.fuelindicator = this.fuelindicatorservice.getFuelIndicatorlist();

  }

}
