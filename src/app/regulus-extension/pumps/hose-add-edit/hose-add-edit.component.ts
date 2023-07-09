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
    console.log("Shared Values");
    console.log(this.shared.getHoseValue());
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface Blends {
  id: number,
  blendName: string
}

