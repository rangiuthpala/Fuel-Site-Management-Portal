import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-blend-add-edit',
  templateUrl: './blend-add-edit.component.html',
  styleUrls: ['./blend-add-edit.component.scss']
})
export class BlendAddEditComponent {
  constructor(
    public dialogRef: MatDialogRef<BlendAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      dialogRef.disableClose = true;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
