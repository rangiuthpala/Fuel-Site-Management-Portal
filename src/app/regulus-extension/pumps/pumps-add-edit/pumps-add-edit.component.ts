import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AllservicesService, RegulusAllPumps, RegulusDevices, RegulusPhysicalIds, RegulusProtocols, RegulusPumpModels } from 'src/app/service/allservices.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';



@Component({
  selector: 'app-pumps-add-edit',
  templateUrl: './pumps-add-edit.component.html',
  styleUrls: ['./pumps-add-edit.component.scss']
})
export class PumpsAddEditComponent {
  physicalIds: RegulusPhysicalIds[] = [];
  devices: RegulusDevices[] = [];
  protocols: RegulusProtocols[] = [];
  loopIDs: string[] = ['1'];
  models: RegulusPumpModels[] = [];
  pumps: RegulusAllPumps | undefined;

  logicalID = new FormControl(this.shared.getPumpValue().lid);
  physicalID = new FormControl(this.shared.getPumpValue().pid);
  loopID = new FormControl(this.shared.getPumpValue().loopID);
  protocol = new FormControl(this.shared.getPumpValue().prot);
  model = new FormControl(this.shared.getPumpValue().model);
  stackSize = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<PumpsAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private shared: SharedserviceService, private service: AllservicesService) {
      this.setPumpValues();
      dialogRef.disableClose = true;
      
    }

  setPumpValues() {
    // this.logicalID = this.shared.getPumpValue().lid.toString();
    this.service.getRegulusPhysicalIds().subscribe(response => {
      this.physicalIds = response;
    });
    this.service.getRegulusDevices().subscribe(response => {
      this.devices = response;
    });
    this.service.getRegulusProtocols().subscribe(response => {
      this.protocols = response;
    });
    this.service.getRegulusPumpModelsByPump(this.shared.getPumpValue().lid).subscribe(response => {
      this.models = response;
      console.log(this.models);
    });
  }

  addAPump() {
    
    const pump = { 
            "pid": this.physicalID.value,
            "loopID": this.loopID.value,
            "prot": this.protocol.value,
            "model": this.model.value,
            "stSiz": this.stackSize.value};
    
    if(this.shared.getAddOrEdit()) {
      //To change when pump models endpoint created
      this.service.getRegulusPumpModelsByPump(this.physicalID.value).subscribe(response => {
        this.models = response;
        console.log(this.models);
      });
      console.log("Add");
      this.service.createANewPump(pump).subscribe(response => {
        console.log(pump);
        console.log(response);
      });
      this.dialogRef.close();
    } else {
      this.service.updateAPump(pump).subscribe(response => {
        console.log(response);
      });
      this.dialogRef.close();
    }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
