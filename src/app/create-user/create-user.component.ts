import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent {
  constructor(public dialog: MatDialog, private service: AuthService) {
    this.loadUsers();
  }

  openDialog() {
    this.dialog.open(CreateUserDialogComponent);
  }

  userList:any;
  displayedColumns: string[] = ['index','id', 'userName', 'isActive'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  loadUsers() {
    this.service.getUsers().subscribe(response => {
      this.userList = response;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
    });
  }

}


