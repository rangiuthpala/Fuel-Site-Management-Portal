import { Injectable } from '@angular/core';
import { RegulusAllPumps, RegulusHoses } from './allservices.service';

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
  
  selectedPumpValue: RegulusAllPumps = {
    lid: 0,
    pid: 0,
    loopID: "",
    prot: "",
    model: "",
    stSiz: "",
    iD_PMP_Model: 0,
    iD_PMP_MK: 0
  };
  
  private dashboardDate: string = "";
  private addOrEditPump: number = 0;
  private addOrEditHose: number = 0;

  constructor() { }

  setDashboardDate(date: string) {
    this.dashboardDate = date;
  }

  getDashboardDate():string {
    return this.dashboardDate;
  }

  getPumpValue(): RegulusAllPumps {
    return this.selectedPumpValue;
  }

  setPumpValue(value: RegulusAllPumps) {
    this.selectedPumpValue = value;
  }

  getAddEditHoseValue(): number {
    return this.addOrEditHose;
  }

  setAddEditHoseValue(value: number) {
    this.addOrEditHose = value;
  }
  getAddEditPumpValue(): number {
    return this.addOrEditPump;
  }

  setAddEditPumpValue(value: number) {
    this.addOrEditPump = value;
  }
}
