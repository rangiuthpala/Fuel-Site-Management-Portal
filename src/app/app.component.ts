import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit{
  title = "Fuel-Site-Management-Portal";
  showFiller = false;
  longText = ``;
  userName: any;

  ismenurequired = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.userName = sessionStorage.getItem("name");

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
