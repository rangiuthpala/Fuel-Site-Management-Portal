import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TerminalService } from './terminal.service';
import { TerminalStatus } from './terminal-status';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-terminal-status',
  templateUrl: './terminal-status.component.html',
  styleUrls: ['./terminal-status.component.scss']
})
export class TerminalStatusComponent {
  constructor(private terminalService: TerminalService) {}
  ELEMENT_DATA: Observable<TerminalStatus[]> = this.terminalService.getFuelIndicatorlist();
  displayedColumns: string[] = ['serial', 'ipAddress','paperLevel', 'printerStatus', 'status'];
  dataSource = new MatTableDataSource<TerminalStatus>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
}

  export interface PeriodicElement {
    ipAddress: number;
    serial: string;
    paperLevel: string;
    printerStatus: string;
    status: string;
  }
  
  

