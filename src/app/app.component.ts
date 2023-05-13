import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Fuel-Site-Management-Portal";
  showFiller = false;
  longText = ``;

  ismenurequired = false;

  constructor(private router: Router) {}

  ngDoCheck(): void {
    let currenturl = this.router.url;
    if (currenturl == "/login") {
      this.ismenurequired = false;
    } else {
      this.ismenurequired = true;
    }
  }

  logOut() {
    this.router.navigate(["login"]);
  }
}
