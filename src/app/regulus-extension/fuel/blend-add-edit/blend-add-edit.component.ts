import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedserviceService } from 'src/app/service/sharedservice.service';


@Component({
  selector: 'app-blend-add-edit',
  templateUrl: './blend-add-edit.component.html',
  styleUrls: ['./blend-add-edit.component.scss']
})
export class BlendAddEditComponent {
  blendID = new FormControl(this.shared.getBlendValue().blendID);
  allocationLimit = new FormControl(0.0000);
  blendName = new FormControl(this.shared.getBlendValue().blendName);
  priceID = new FormControl(this.shared.getBlendValue().priceID);
  blendPrice = new FormControl(this.shared.getBlendValue().blendPrice);

  constructor(
    public dialogRef: MatDialogRef<BlendAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private shared: SharedserviceService) {
      dialogRef.disableClose = true;
      this.setValuesToFields();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setValuesToFields() {

  }

  onClickValue() {
    console.log(this.shared.getBlendValue());
  }
}
