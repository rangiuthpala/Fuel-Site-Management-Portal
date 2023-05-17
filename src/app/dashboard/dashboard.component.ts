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


  constructor(private service: AllservicesService) {
  }

  displayedColumns: string[] = ['PumpID', 'transaction', 'time'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}

export interface PeriodicElement {
  PumpID: number;
  transaction: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];

