import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BlendAddEditComponent } from './blend-add-edit/blend-add-edit.component';
import { AllservicesService, RegulusBlends } from 'src/app/service/allservices.service';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from 'src/app/service/sharedservice.service';

export interface PeriodicElementtwo {
  blend_id: string;
  blend_name: string;
  allocation_limit: number;
  limit_type: string;
  price_liter: string;
  price_id: string;
}
const ELEMENT_two: PeriodicElementtwo[] = [
  {blend_id: 'kjh', blend_name: 'sds', allocation_limit: 1.0079, limit_type: 'H', price_liter:'1', price_id:'sss'}
];


@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.scss']
})

export class FuelComponent {
  checked = false;
  selectedRow:any;
  displayedColumns: string[] = ['blend_id', 'blend_name', 'price_liter', 'price_id'  ]
  dataSource: any;

  constructor(public dialog: MatDialog, private service: AllservicesService, 
    private toastr: ToastrService, private shared: SharedserviceService) {
    this.loadAllBlends();
  }

  onSelect(row: RegulusBlends) {
    this.selectedRow = row;
    
    console.log(row);
  }

  openblendAdd(){
    if (this.selectedRow !== undefined) {
      this.shared.resetBlendValue();
      this.dialog.open(BlendAddEditComponent);
    } else {
      this.toastr.error('Please Select a Blend to proceed');
    }

  }

  openblendEdit(){
    if (this.selectedRow !== undefined) {
      this.shared.setBlendValue(this.selectedRow);
      this.dialog.open(BlendAddEditComponent);
    } else {
      this.toastr.error('Please Select a Blend to proceed');
    }
  }

  deleteBlend() {
    if (this.selectedRow !== undefined) {

    } else {
      this.toastr.error('Please Select a Blend to proceed');
    }
  }

  loadAllBlends() {
    this.service.getRegulusBlends().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
    });
  }
  
}
