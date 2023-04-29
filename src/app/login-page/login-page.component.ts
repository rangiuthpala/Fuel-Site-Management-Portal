import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent {
  hide = true;

  model: any = {};
  getData: any;

  

  constructor(
    private builder: FormBuilder,
    private service: AuthService,
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
    if(this.loginform.valid) {
      this.service.getUsersById(this.loginform.value.username).subscribe(response => {
        this.userdata = response[0];
        console.log(this.userdata);
        console.log(this.userdata.id);
        console.log(this.loginform.value.password);
        if (this.userdata.password===this.loginform.value.password) {
          if (this.userdata.isActive==="Y" || this.userdata.isActive==="y") {
            sessionStorage.setItem('username', this.userdata.id);
            this.router.navigate(["/dashboard"]);
          }
        } else {
          console.log("Invalid User");
        }
        
      });
    }
  }
}
