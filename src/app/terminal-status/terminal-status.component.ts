import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { TerminalService } from './terminal.service';
import { TerminalStatus } from './terminal-status';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-terminal-status',
  templateUrl: './terminal-status.component.html',
  styleUrls: ['./terminal-status.component.scss']
})
export class TerminalStatusComponent {
  constructor(private service: AuthService) {
    this.loadTerminals();
  }

  terminalList:any;
  dataSource:any;

  displayedColumns: string[] = ['serial', 'ipAddress','paperLevel', 'printerStatus', 'status'];
  
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  // ngOnInit() {
  //   // this.dataSource.paginator = this.paginator;
  // }

  loadTerminals() {
    this.service.getFuelIndicatorlist().subscribe(response => {
      this.terminalList = response;
      this.dataSource = new MatTableDataSource(this.terminalList);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  
}
  
  

