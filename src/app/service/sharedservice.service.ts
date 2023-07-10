import { Injectable } from '@angular/core';
import { RegulusAllPumps, RegulusBlends, RegulusHoses, RegulusLoops } from './allservices.service';

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

  selectedBlendValue: RegulusBlends = {
    blendID: 0,
    blendName: "",
    blendPrice: 0,
    priceID: 0
  };
  
  selectedLoopValue: RegulusLoops = {
    iD_PMP_LP: 0,
    nM_PMP_MK: "",
    deviceType: "",
    networkProtsID: 0,
    networkDeviceID: 0,
    iD_PMP_MDL: 0
  };

  add_edit: boolean = false;

  private dashboardDate: string = "";
  private addOrEditClick: number = 0;
  // private addOrEditHose: number = 0;

  constructor() { }

  setDashboardDate(date: string) {
    this.dashboardDate = date;
  }

  getDashboardDate():string {
    return this.dashboardDate;
  }
// Pump
  getPumpValue(): RegulusAllPumps {
    return this.selectedPumpValue;
  }

  setPumpValue(value: RegulusAllPumps) {
    this.selectedPumpValue = value;
  }

  resetPumpValue() {
    this.selectedPumpValue = {
      lid: 0,
      pid: 0,
      loopID: "",
      prot: "",
      model: "",
      stSiz: "",
      iD_PMP_Model: 0,
      iD_PMP_MK: 0
    };
  }

  getAddEditClickValue(): number {
    return this.addOrEditClick;
  }

  setAddEditClickValue(value: number) {
    this.addOrEditClick = value;
  }
// Hose
  getHoseValue(): RegulusHoses {
    return this.selectedHoseValue;
  }

  setHoseValue(value: RegulusHoses) {
    this.selectedHoseValue = value;
  }

  resetHoseValue() {
    this.selectedHoseValue = {pumpID: 0,
      hoseid: 0,
      blendID: "",
      priceID: 0,
      priceLevelID: 0,
      gradeName: "",
      price: 0,
      hoseNumber: 0,
      tankID: 0};
  }
// Blend
  getBlendValue(): RegulusBlends {
    return this.selectedBlendValue;
  }
  setBlendValue(value: RegulusBlends) {
    this.selectedBlendValue = value;
  }

  resetBlendValue() {
    this.selectedBlendValue = {
      blendID: 0,
      blendName: "",
      blendPrice: 0,
      priceID: 0
    };
  }
// Loop
  getLoopValue(): RegulusLoops {
    return this.selectedLoopValue;
  }
  setLoopValue(value: RegulusLoops) {
    this.selectedLoopValue = value;
  }

  resetLoopValue() {
    this.selectedLoopValue = {
      iD_PMP_LP: 0,
      nM_PMP_MK: "",
      deviceType: "",
      networkProtsID: 0,
      networkDeviceID: 0,
      iD_PMP_MDL: 0
    };
  }
  setAddEdit(value:boolean) {
    this.add_edit = value;
  }
  // True = add, False = edit
  getAddOrEdit(): boolean {
    return this.add_edit;
  }
}
