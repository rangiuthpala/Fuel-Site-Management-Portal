import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from '../service/auth.service';
import { MatSort } from '@angular/material/sort';
import { AllservicesService } from '../service/allservices.service';

@Component({
  selector: 'app-terminal-status',
  templateUrl: './terminal-status.component.html',
  styleUrls: ['./terminal-status.component.scss']
})
export class TerminalStatusComponent {
  constructor(private service: AllservicesService) {
    this.loadTerminals();
  }

  terminalList:any;
  dataSource:any;

  displayedColumns: string[] = ['serial', 'ipAddress','paperLevel', 'printerStatus', 'status'];
  
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  loadTerminals() {
    this.service.getAllTerminalStatus().subscribe(response => {
      this.terminalList = response;
      this.dataSource = new MatTableDataSource(this.terminalList);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  
}
  
  

