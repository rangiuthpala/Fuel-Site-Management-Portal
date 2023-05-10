import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent {
  hide = true;
  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
  ) {}
  onCloseClick(): void {
    this.dialogRef.close();
  }
}
