import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-reports-gen",
  templateUrl: "./reports-gen.component.html",
  styleUrls: ["./reports-gen.component.scss"],
})
export class ReportsGenComponent {

  
  defaultValue = { hour: 13, minute: 30 };

  title: string = "No Title";

  timeChangeHandler(event: any) {}

  invalidInputHandler() {}

  heroes: any;
  constructor(private route: ActivatedRoute) {
    this.changeTitlesAndReports();
  }
  isDisabled: boolean = true;
  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get("id");
    console.log(heroId);
  }

  event1:any;
  event2:any;

  onChangeEvent(event: any) {
    this.event1 = event.value;    

    if (this.event2 !== undefined && this.event1 > this.event2) {
      this.isDisabled = true;
      console.log("From date should be before to Date");
    } else if (this.event2 !== undefined && this.event1 <= this.event2) {
      this.isDisabled = false;
    }
  }

  onChangeEvent2(event: any) {

    this.event2 = event.value;

    if (this.event1 !== undefined && this.event2 !== undefined && (this.event2 < this.event1)) {
      this.isDisabled = true;
    } else if(this.event1 !== undefined && this.event2 !== undefined && (this.event2 >= this.event1)) {
      this.isDisabled = false;
    }
  }

  
  changeTitlesAndReports() {
    const heroId = this.route.snapshot.paramMap.get("id");

    


    if (heroId === "1") {
      this.title = "Total Sales";
    } else if (heroId === "2") {
      this.title = "Method of Payment";
    } else if (heroId === "3") {
      this.title = "Dispenser & Terminal Sales";
    } else if (heroId === "4") {
      this.title = "Sales Comparison";
    } else {
      this.title = "Title ";
    }
  }
}
