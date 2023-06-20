import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-loop-add-edit',
  templateUrl: './loop-add-edit.component.html',
  styleUrls: ['./loop-add-edit.component.scss']
})
export class LoopAddEditComponent {
  constructor(
    public dialogRef: MatDialogRef<LoopAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      dialogRef.disableClose = true;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
