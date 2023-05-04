import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
})
export class ReportsComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {
    this.addNewItem(this.currentItem);
  }

  reportPages: any = [
    {
      id: 1,
      reportName: "Total Sales",
    },
    {
      id: 2,
      reportName: "Method of Payment",
    },
    {
      id: 3,
      reportName: "Dispenser & Terminal Sales",
    },
    {
      id: 4,
      reportName: "Sales Comparison",
    },
  ];
  currentItem = 'Television';

  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }

  whatWasClicked(id:any) {
    console.log(id);
  }
}
