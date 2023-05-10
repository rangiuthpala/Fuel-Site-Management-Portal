import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent {
onEnter(arg0: any) {
throw new Error('Method not implemented.');
}
  hide = true;

  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    sessionStorage.clear();
  }
  userdata: any;

  loginform = this.builder.group({
    username: this.builder.control("", Validators.required),
    password: this.builder.control("", Validators.required),
  });

  loginUser() {
    if (this.loginform.valid) {
      this.service
        .getUsersById(this.loginform.value.username)
        .subscribe((response) => {
          this.userdata = response[0];
          if (this.userdata.password === this.loginform.value.password) {
            sessionStorage.setItem("username", this.userdata.id);
            sessionStorage.setItem("name", this.userdata.userName);
            this.router.navigate(["dashboard"]);
          } else {
            this.toastr.error('Please contact admin', 'Invalid User credentials');
          }
        });
    }
  }
  onKeydown(event: any) {
    console.log(event);
  }
}
