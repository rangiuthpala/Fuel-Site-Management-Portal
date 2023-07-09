import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { LoopAddEditComponent } from './loop-add-edit/loop-add-edit.component';
import { AllservicesService, RegulusLoops, RegulusProtocols } from 'src/app/service/allservices.service';
import { MatTableDataSource } from '@angular/material/table';
import { SharedserviceService } from 'src/app/service/sharedservice.service';
import { ToastrService } from 'ngx-toastr';

export interface PeriodicElementtwo {
  hoses: string;
  blend_name: string;
  tank_number: number;
  price_level: string;
  price_id:string;
}

const ELEMENT_two: PeriodicElementtwo[] = [
  {hoses: 'kjh', blend_name: 'sds', tank_number: 1.0079, price_level: 'H', price_id:'sss'}
];

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.scss']
})
export class LoopsComponent {
  checked = false;
  selectedRow:any;
  displayedColumns: string[] = ['loopId', 'deviceName', 'protocol', 'disabled' ]
  dataSource: any;
  protocols: RegulusProtocols[] = [];
  displayedLoops: DisplayedLoops[] = [];
  selectedLoopValue: RegulusLoops[] = [];

  constructor(public dialog: MatDialog, private service: AllservicesService, 
    private toastr: ToastrService, private shared: SharedserviceService) {
    this.getAllLoops();
  }
  
  onSelect(row: any) {
    this.selectedRow = row;
  }

  getAllLoops() {
    this.service.getRegulusProtocols().subscribe(response => {
      this.protocols = response;
    });
    this.service.getRegulusLoops().subscribe(response => {
      this.selectedLoopValue = response;
      for(var resp of response) {
        const displayLoop: DisplayedLoops = {
          loopID: resp.iD_PMP_LP,
          device: resp.deviceType,
          protocolName: resp.nM_PMP_MK,
          disabled: "No"
        }
        this.displayedLoops.push(displayLoop);
         
      }
      console.log(this.displayedLoops);
      this.dataSource = new MatTableDataSource(this.displayedLoops);
    });
  }

  openLoopAdd(){
    if (this.selectedRow !== undefined) {
      this.shared.resetLoopValue();
      this.dialog.open(LoopAddEditComponent);
    } else {
      this.toastr.error('Please Select a Loop to proceed');
    }
  }

  openLoopEdit(){
    if (this.selectedRow !== undefined) {
      for(var loop of this.selectedLoopValue) {
        if(this.selectedRow.loopID === loop.iD_PMP_LP) {
          this.shared.setLoopValue(loop);
        }
      }
      this.dialog.open(LoopAddEditComponent);
    } else {
      this.toastr.error('Please Select a Loop to proceed');
    }
  }

  deleteLoop() {
    if (this.selectedRow !== undefined) {

    } else {
      this.toastr.error('Please Select a Loop to proceed');
    }
  }

}

export interface DisplayedLoops {
  loopID: number,
  device: string,
  protocolName: string,
  disabled: string
}