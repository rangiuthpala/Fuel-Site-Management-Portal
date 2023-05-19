import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AllservicesService } from "./service/allservices.service";
import { AuthService } from "./service/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Fuel-Site-Management-Portal";
  showFiller = false;
  longText = ``;
  userName: any;

  ismenurequired = false;

  constructor(private router: Router, private service: AuthService) {
  }

  getData() {
    return sessionStorage.getItem('name');
  }

  ngDoCheck(): void {
    let currenturl = this.router.url;
    if (currenturl == "/login") {
      this.ismenurequired = false;
    } else {
      this.ismenurequired = true;
    }
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }
}
