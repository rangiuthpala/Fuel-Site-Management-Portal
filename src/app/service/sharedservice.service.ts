import { Injectable } from '@angular/core';
import { RegulusHoses } from './allservices.service';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  selectedHoseValue: RegulusHoses = {pumpID: 0,
    hoseid: 0,
    blendID: "",
    priceID: 0,
    priceLevelID: 0,
    gradeName: "",
    price: 0,
    hoseNumber: 0,
    tankID: 0};
  
  private dashboardDate: string = "";

  constructor() { }

  setDashboardDate(date: string) {
    this.dashboardDate = date;
  }

  getDashboardDate():string {
    return this.dashboardDate;
  }
}
