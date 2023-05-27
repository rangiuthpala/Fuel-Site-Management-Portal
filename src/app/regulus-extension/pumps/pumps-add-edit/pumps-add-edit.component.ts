import { Component } from '@angular/core';


@Component({
  selector: 'app-pumps-add-edit',
  templateUrl: './pumps-add-edit.component.html',
  styleUrls: ['./pumps-add-edit.component.scss']
})
export class PumpsAddEditComponent {
  dialogRef: any;
  onNoClick(): void {
    this.dialogRef.close();
  }
}
