import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AllservicesService, RegulusDevices, RegulusProtocols } from 'src/app/service/allservices.service';
import { SharedserviceService } from 'src/app/service/sharedservice.service';


@Component({
  selector: 'app-loop-add-edit',
  templateUrl: './loop-add-edit.component.html',
  styleUrls: ['./loop-add-edit.component.scss']
})
export class LoopAddEditComponent {

  protocols: RegulusProtocols[] = [];
  devices: RegulusDevices[] = [];

  loopID = new FormControl(this.shared.getLoopValue().iD_PMP_LP);
  deviceType = new FormControl(this.shared.getLoopValue().deviceType);
  protocolName = new FormControl(this.shared.getLoopValue().nM_PMP_MK);

  constructor(
    public dialogRef: MatDialogRef<LoopAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private shared:SharedserviceService,
    private service: AllservicesService) {
      dialogRef.disableClose = true;
      this.setLoopValues();
    }

  setLoopValues() {
    this.service.getRegulusDevices().subscribe(response => {
      this.devices = response;
    });
    this.service.getRegulusProtocols().subscribe(response => {
      this.protocols = response;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
