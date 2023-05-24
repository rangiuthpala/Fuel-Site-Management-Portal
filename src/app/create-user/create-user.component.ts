import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CreateUserDialogComponent } from "../create-user-dialog/create-user-dialog.component";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { AuthService, Login } from "../service/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent {
  buttonRef: string = "Create User";
  buttonColour: any;
  updateUserBtn: boolean = false;

  constructor(
    public dialog: MatDialog,
    private service: AuthService,
    private builder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.loadUsers();
  }

  openDialog() {
    this.dialog.open(CreateUserDialogComponent);
  }

  userList: any;
  displayedColumns: string[] = ["index", "id", "userName", "isActive"];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  createUserForm = new FormGroup({
    userName: this.builder.control("", Validators.required),
    password: this.builder.control("", Validators.required),
    confirmPassword: this.builder.control("", Validators.required),
  });

  createOrUpdateUser() {
    this.updateUserBtn ? this.updateUser() : this.createUser();
  }

  createUser() {
    if (this.createUserForm.value.password === this.createUserForm.value.confirmPassword) {
      console.log(this.createUserForm);
      const e = {
        id: "",
        userName: "",
        password: "",
        isActive: "",
      };

      if (((e.id = this.createUserForm.controls.userName.value ? this.createUserForm.controls.userName.value.split(" ")[0] : ""),
        (e.userName = this.createUserForm.controls.userName.value ? this.createUserForm.controls.userName.value : ""),
        (e.password = this.createUserForm.controls.password.value ? this.createUserForm.controls.password.value : ""),
        (e.isActive = this.createUserForm.controls.userName.value ? "Y" : "N"), e.userName)) 
        {
        this.service.createUser(e).subscribe((response) => {
          if (response.isSucess) {
            this.toastr.info(response.message);
          } else {
            this.toastr.error(response.message);
          }
        });
      }
    } else {
      this.toastr.error("Password Doesnt Match");
    }
  }

  updateUser() {
    if (this.createUserForm.value.password === this.createUserForm.value.confirmPassword) {
      console.log(this.createUserForm);
      const e = {
        id: "",
        userName: "",
        password: "",
        isActive: "",
      };

      if (((e.id = this.createUserForm.controls.userName.value ? this.createUserForm.controls.userName.value.split(" ")[0] : ""),
        (e.userName = this.createUserForm.controls.userName.value ? this.createUserForm.controls.userName.value : ""),
        (e.password = this.createUserForm.controls.password.value ? this.createUserForm.controls.password.value : ""),
        (e.isActive = this.createUserForm.controls.userName.value ? "Y" : "N"), e.userName)) 
        {
        this.service.updateUser(e).subscribe((response) => {
          if (response.isSucess) {
            this.toastr.info(response.message);
          } else {
            this.toastr.error(response.message);
          }
        });
      }
    } else {
      this.toastr.error("Password Doesnt Match");
    }
  }

  loadUsers() {
    this.service.getUsers().subscribe((response) => {
      this.userList = response;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
    });
    this.updateUserBtn = true;
  }
  hide = true;

  clickedRows: any;

  onSelect(row: Login) {
    this.buttonRef = "Update User";
    this.createUserForm.setValue({
      userName:row.userName,
      password: row.password,
      confirmPassword: row.password
    });
    this.buttonColour = "#999901";
  }

  clearForm() {
    this.createUserForm.reset();
    this.buttonRef = "Create User";
    this.buttonColour = "#1f3683";
    this.updateUserBtn = false;
  }
}
