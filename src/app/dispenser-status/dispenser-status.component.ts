import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import {MatTableModule} from '@angular/material/table';
import {FormGroup, FormControl} from '@angular/forms';
import { error } from "highcharts";

export interface PeriodicElement {
  dispenser: string;
  dispenserState: string;
  nozzleState: string;
  amount: string;
  volume: string;

  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {dispenser: '1', dispenserState: 'Hydrogen', nozzleState: '1.0079', amount: 'H', volume: 'aa'},
  {dispenser: '2', dispenserState: 'Helium', nozzleState: '4.0026', amount: 'He', volume: 'ss'},
];

@Component({
  selector: "app-dispenser-status",
  templateUrl: "./dispenser-status.component.html",
  styleUrls: ["./dispenser-status.component.scss"],
})
export class DispenserStatusComponent{
  displayedColumns: string[] = ['dispenser', 'dispenserState', 'nozzleState', 'amount', 'volume'];
  dataSource = ELEMENT_DATA;
}



