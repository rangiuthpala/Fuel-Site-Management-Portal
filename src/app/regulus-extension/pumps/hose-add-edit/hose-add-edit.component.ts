import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AllservicesService } from 'src/app/service/allservices.service';
import { PumpsComponent } from '../pumps.component';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hose-add-edit',
  templateUrl: './hose-add-edit.component.html',
  styleUrls: ['./hose-add-edit.component.scss']
})
export class HoseAddEditComponent {

  blendNames: Blends[] = [{id: 1, blendName:'Unleaded 91'}, {id:2, blendName:'Premium 95'}, {id:3, blendName:'Diesel'}, {id:4, blendName:'GoClear'}];
  priceIds: number[] = [1, 2, 3];
  blendId: string = "";

  hoseId = new FormControl(this.shared.getHoseValue().hoseid);
  blendName = new FormControl(this.shared.getHoseValue().gradeName);
  tankId = new FormControl(this.shared.getHoseValue().tankID);
  priceLevel = new FormControl(this.shared.getHoseValue().priceLevelID);
  priceId = new FormControl(this.shared.getHoseValue().priceID);
  
  constructor(public dialogRef: MatDialogRef<HoseAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, private service: AllservicesService, private shared: SharedserviceService) {
      dialogRef.disableClose = true;
  }

  hoseValuesMethod() {
    if (this.blendName.value === "Unleaded 91") {
      this.blendId = "101";
    } else if (this.blendName.value === "Premium 95") {
      this.blendId = "102";
    } else if (this.blendName.value === "Diesel") {
      this.blendId = "103"
    } else if (this.blendName.value === "GoClear") {
      this.blendId = "106";
    }
    const hose = {
      "pumpID": this.shared.getHoseValue().pumpID,
      "hoseid": this.hoseId.value,
      "blendID": this.blendId,
      "priceID": this.priceId.value,
      "priceLevelID": this.priceLevel.value,
      "gradeName": this.blendName.value,
      "hoseNumber": this.shared.getHoseValue().hoseid
    };
    console.log(this.shared.getAddOrEdit());
    if(this.shared.getAddOrEdit()) {
      console.log(hose);

      this.service.createANewHose(hose).subscribe(response => {
        console.log(response);
      });
      this.dialogRef.close();
    } else {
      this.dialogRef.close();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface Blends {
  id: number,
  blendName: string
}

