import { Component, Inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { AllservicesService } from "src/app/service/allservices.service";
import { SharedserviceService } from "src/app/service/sharedservice.service";

@Component({
  selector: "app-blend-add-edit",
  templateUrl: "./blend-add-edit.component.html",
  styleUrls: ["./blend-add-edit.component.scss"],
})
export class BlendAddEditComponent {
  blendID = new FormControl(this.shared.getBlendValue().blendID);
  allocationLimit = new FormControl(0.0);
  blendName = new FormControl(this.shared.getBlendValue().blendName);
  priceID = new FormControl(this.shared.getBlendValue().priceID);
  blendPrice = new FormControl(this.shared.getBlendValue().blendPrice);

  constructor(
    public dialogRef: MatDialogRef<BlendAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private shared: SharedserviceService,
    private service: AllservicesService,
    private toastr: ToastrService
  ) {
    dialogRef.disableClose = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClickValue() {
    console.log(this.shared.getBlendValue());
    const blend = {
      "blendID": this.blendID.value,
      "blendName": this.blendName.value,
      "blendPrice": this.blendPrice.value,
      "priceID": this.priceID.value,
    };
    if (this.shared.getAddOrEdit()) {
      this.service.createANewBlend(blend).subscribe((response) => {
        if (response.isSucess) {
          this.toastr.info(response.message);
        } else {
          this.toastr.error(response.message);
        }
      });
      this.dialogRef.close();
    } else {
      this.dialogRef.close();
    }
  }
}
