import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllservicesService } from 'src/app/service/allservices.service';
import { PumpsComponent } from '../pumps.component';
import { SharedserviceService } from 'src/app/service/sharedservice.service';

@Component({
  selector: 'app-hose-add-edit',
  templateUrl: './hose-add-edit.component.html',
  styleUrls: ['./hose-add-edit.component.scss']
})
export class HoseAddEditComponent {
  constructor(public dialog: MatDialog, private service: AllservicesService, private shared: SharedserviceService) {
  }

  hoseValuesMethod() {
    console.log("Shared Values");
    console.log(this.shared.selectedHoseValue);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
