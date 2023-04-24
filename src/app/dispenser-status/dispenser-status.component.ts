import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormGroup, FormControl} from '@angular/forms'; 
import { DispenserstatusService } from './dispenserstatus.service';
import { Dispenser } from './dispenser';
import { error } from 'highcharts';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dispenser-status',
  templateUrl: './dispenser-status.component.html',
  styleUrls: ['./dispenser-status.component.scss']
})
export class DispenserStatusComponent implements OnInit{
  public dispensers: Dispenser[] = [];

  displayedColumns: string[] = ['Dispenser', 'Dispenser State', 'Nozzle State', 'Amount', 'Volume'];
  dataSource: any = [];

  dispenser: Observable<Dispenser[]> | undefined
  constructor(private dispenserstatusService: DispenserstatusService) { }
  
  ngOnInit() {
    // this.getDispenserStatus();
  }

  reloadData(){
  this.dispenser = this.dispenserstatusService.getDispensers();
  }

  // public getDispenserStatus(): void {
  //   this.dispenserstatusService.getDispenserStatus().subscribe(
  //     (response: Dispenser[]) => {
  //       this.dispensers = response;
  //       this.dataSource = response;
  //       console.log(this.dispensers);
  //     });
  // }
  // dataSource = new MatTableDataSource<Dispenser>();
  // date = new FormControl(new Date());


}

export interface PeriodicElement {
  dispenser: string;
    dispenserState: string;
    nozzleState: string;
    amount: string;
    volume: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.007989, symbol: 'H', volume: "1"},
  // {position: 1, name: 'Hydrogen', weight: 1.007989, symbol: 'H', volume: "1"},
  // {position: 1, name: 'Hydrogen', weight: 1.007989, symbol: 'H', volume: "1"}
];
