import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PumpsAddEditComponent } from "../pumps/pumps-add-edit/pumps-add-edit.component";
import { HoseAddEditComponent } from './hose-add-edit/hose-add-edit.component';
import { AllservicesService, RegulusAllPumps } from 'src/app/service/allservices.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  logical_id: number;
  physical_id: number;
  loop_id: number;
  protocol: string;
  model:string;
  stack_size: string;
  standalone_enabled: string;
  disabled: string;
}

export interface PeriodicElementtwo {
  hoses: string;
  blend_name: string;
  tank_number: number;
  price_level: string;
  price_id:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {logical_id: 1, loop_id: 12, physical_id: 1.0079, protocol: 'H', model:'sss', stack_size:'skjd', standalone_enabled:'aa', disabled: 'asdd'},
  {logical_id: 2, loop_id: 455, physical_id: 4.0026, protocol: 'He', model:'hshsh', stack_size:'skjd', standalone_enabled: 'sss', disabled: 'sf'},
  {logical_id: 3, loop_id: 55, physical_id: 6.941, protocol: 'Li', model:'sss', stack_size:'skjd', standalone_enabled: 'sdsd', disabled: 'sds'}
];

const ELEMENT_two: PeriodicElementtwo[] = [
  {hoses: 'kjh', blend_name: 'sds', tank_number: 1.0079, price_level: 'H', price_id:'sss'}
];

@Component({
  selector: 'app-pumps',
  templateUrl: './pumps.component.html',
  styleUrls: ['./pumps.component.scss']
})

export class PumpsComponent {
  displayedColumns: string[] = ['logical_id', 'physical_id', 'loop_id', 'protocol', 'model', 'stack_size', 'standalone_enabled', 'disabled'];
  dataSourcePumps: any;
  displayedColumnstwo: string[] = ['hoses', 'blend_name', 'tank_number', 'price_level', 'price_id'  ]
  dataSourceHoses: any;

  constructor(public dialog: MatDialog, private service: AllservicesService) {
    this.getAllPumps();
  }

  getAllPumps() {
    this.service.getRegulusAllPumps().subscribe(response => {
      this.dataSourcePumps = new MatTableDataSource(response);
      console.log(this.dataSourcePumps);
    });
  }

  onSelect(row: RegulusAllPumps) {
    console.log(row);
    this.service.getRegulusHoses(row.lid).subscribe(response => {
      this.dataSourceHoses = response;
    });
  }
  openDialog() {
    this.dialog.open(PumpsAddEditComponent);
  }

  openhoseDialog(){
    this.dialog.open(HoseAddEditComponent)
  }

  }
