import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AllservicesService } from '../service/allservices.service';
import { FormControl } from '@angular/forms';
import { SharedserviceService } from '../service/sharedservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent {
  dataSourcePump: any;
  dataSourceTerminal: any;
  date = new FormControl(new Date());


  constructor(private service: AllservicesService, private shared: SharedserviceService) {
    this.loadPumpIdleStatus();
    this.loadTerminalIdleStatus();
    this.reloadData(); 
  }

  displayedColumns: string[] = ['PumpID', 'transaction', 'time'];
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  ngAfterViewInit() {
  }

  reloadData() {
    console.log(this.service.formatDateNew(this.date.value?.toString()));
    this.shared.setDashboardDate(this.service.formatDateNew(this.date.value?.toString()));
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

