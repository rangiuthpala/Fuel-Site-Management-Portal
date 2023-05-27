import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { BlendAddEditComponent } from './blend-add-edit/blend-add-edit.component';
import { AllservicesService } from 'src/app/service/allservices.service';
import { MatTableDataSource } from '@angular/material/table';

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
  displayedColumnstwo: string[] = ['blend_id', 'blend_name', 'price_liter', 'price_id'  ]
  dataSourcetwo: any;

  constructor(public dialog: MatDialog, private service: AllservicesService) {
    this.loadAllBlends();
  }
  
  openblendAddEdit(){
    this.dialog.open(BlendAddEditComponent)
  }

  loadAllBlends() {
    this.service.getRegulusBlends().subscribe(response => {
      this.dataSourcetwo = new MatTableDataSource(response);
    });
  }
  
}
