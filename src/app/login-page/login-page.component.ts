import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  hide = true;

  model: any = {};
  getData: any

  constructor(private loginservice: LoginService, private router: Router) {

  }

  ngOnInit() {

  }

  loginUser() {
    var username = this.model.username;
    var password = this.model.password;

    // console.log(username+" "+password)


    // this.loginservice.getUserDetails(username, password).subscribe((res: any) => {
    //   this.getData = res;
    //   if (this.getData == true) {
    //     this.router.navigate(["/dashboard"])
    //   } else {
    //     alert("Invalid Username or Password")
    //   }
    // })
    this.loginservice.getUsers().subscribe((users) => {
      const user = users.find(u => u.userName === username && u.password === password && u.isActive === "Y");


      if (user) {
        this.router.navigate(["/dashboard"])
      } else {
        alert("Invalid Username or Password")
      }
    })

  }


}

