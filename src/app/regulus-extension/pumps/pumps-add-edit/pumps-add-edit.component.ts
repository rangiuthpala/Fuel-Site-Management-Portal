import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-pumps-add-edit',
  templateUrl: './pumps-add-edit.component.html',
  styleUrls: ['./pumps-add-edit.component.scss']
})
export class PumpsAddEditComponent {
  constructor(
    public dialogRef: MatDialogRef<PumpsAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      dialogRef.disableClose = true;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
