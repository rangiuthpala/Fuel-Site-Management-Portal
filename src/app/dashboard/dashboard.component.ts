import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AllservicesService } from '../service/allservices.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent {
  dataSourcePump: any;
  dataSourceTerminal: any;


  constructor(private service: AllservicesService) {
    this.loadPumpIdleStatus();
    this.loadTerminalIdleStatus();
  }

  displayedColumns: string[] = ['PumpID', 'transaction', 'time'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  ngAfterViewInit() {
  }

  loadPumpIdleStatus() {
    this.service.getPumpIdleStatus().subscribe(response => {
      this.dataSourcePump = new MatTableDataSource(response);
      this.dataSourcePump.paginator = this.paginator;
    });
  }

  loadTerminalIdleStatus() {
    this.service.getTerminalIdleStatus().subscribe(response => {
      this.dataSourceTerminal = new MatTableDataSource(response);
      this.dataSourceTerminal.paginator = this.paginator;
    });
  }


}

