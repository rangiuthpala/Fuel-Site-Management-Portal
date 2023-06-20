import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { PumpsAddEditComponent } from "../pumps/pumps-add-edit/pumps-add-edit.component";
import { HoseAddEditComponent } from './hose-add-edit/hose-add-edit.component';
import { AllservicesService, RegulusAllPumps, RegulusHoses } from 'src/app/service/allservices.service';
import { MatTableDataSource } from '@angular/material/table';
import { SharedserviceService } from 'src/app/service/sharedservice.service';

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
  selectedRow:any;
  selectedRowHose:any;
  selectedHoseValue: RegulusHoses = {pumpID: 0,
    hoseid: 0,
    blendID: "",
    priceID: 0,
    priceLevelID: 0,
    gradeName: "",
    price: 0,
    hoseNumber: 0,
    tankID: 0};

  constructor(public dialog: MatDialog, private service: AllservicesService, private shared: SharedserviceService) {
    this.getAllPumps();
  }

  getAllPumps() {
    this.service.getRegulusAllPumps().subscribe(response => {
      this.dataSourcePumps = new MatTableDataSource(response);
      console.log(this.dataSourcePumps);
    });
  }

  onSelect(row: RegulusAllPumps) {
    this.selectedRow = row;
    console.log(this.selectedRow);
    this.service.getRegulusHoses(row.lid).subscribe(response => {
      this.dataSourceHoses = response;
    });
  }

  onSelectHose(row:RegulusHoses) {
    this.selectedRowHose = row;
    this.shared.selectedHoseValue = row;
    console.log(row);
  }
  openDialog() {
    this.dialog.open(PumpsAddEditComponent);
    
    // this.dialog.open(PumpsAddEditComponent, { disableClose: true });
  }

  openhoseDialog(){
    this.dialog.open(HoseAddEditComponent);
  }

  }
