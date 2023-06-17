import { Component, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import {
  AllservicesService,
  GradeSales,
  PayModeWiseSale,
  PriceBreak,
  PumpWiseSale,
  TerminalWiseSale,
  TotalSalesReport,
} from "src/app/service/allservices.service";
import { environment } from "src/environments/environment.development";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-reports-gen",
  templateUrl: "./reports-gen.component.html",
  styleUrls: ["./reports-gen.component.scss"],
})


export class ReportsGenComponent {
  defaultValue = { hour: 13, minute: 30 };
  myTimePicker = {};

  title: string = "No Title";

  timeChangeHandler(event: any) {}

  invalidInputHandler() {}

  heroes: any;
  constructor(
    private route: ActivatedRoute,
    private service: AllservicesService,
    private builder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.changeTitlesAndReports();
    (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
    // this.loadTrasnactionResponse();
  }
  isDisabled: boolean = true;
  isTDateIsGreater: boolean = true;
  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get("id");
    console.log(heroId);
  }

  event1: any;
  event2: any;
  event3: any;

  companyName = environment.companyName;
  sales: TotalSalesReport[] = [];
  pmWiseSales: PayModeWiseSale[] = [];
  pumpWiseSale: PumpWiseSale[] = [];
  terminalWiseSale: TerminalWiseSale[] = [];
  priceBreak: PriceBreak[] = [];
  gradeSales: GradeSales[] = [];

  onChangeEvent(event: any) {
    this.event1 = event.value;

    if (this.event2 !== undefined && this.event1 > this.event2) {
      this.isDisabled = true;
      this.isTDateIsGreater = false;
      this.toastr.error("From date should be before to Date", "Error");
      console.log("From date should be before to Date");
    } else if (this.event2 !== undefined && this.event1 <= this.event2) {
      this.isDisabled = false;
    }
  }

  onChangeEvent2(event: any) {
    this.event2 = event.value;

    if (
      this.event1 !== undefined &&
      this.event2 !== undefined &&
      this.event2 < this.event1
    ) {
      this.isDisabled = true;
      this.isTDateIsGreater = false;
      this.toastr.error("From date should be before to Date", "Error");
      console.log("From date should be before to Date");
    } else if (
      this.event1 !== undefined &&
      this.event2 !== undefined &&
      this.event2 >= this.event1
    ) {
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
    } else if (heroId === "5") {
      this.title = "Price Break Report";
    } else if (heroId === "6") {
      this.title = "Grade Sales Reporst";
    }else {
      this.title = "Title ";
    }
  }

  reportform = new FormGroup({
    fromDate: new FormControl<Date | null>(null),
    toDate: new FormControl<Date | null>(null),
    fromTime: this.builder.control("00:00"),
    toTime: this.builder.control("00:00"),
  });

  clearFieldsDel() {
    this.isDisabled = true;
    this.reportform.reset({ fromTime: "00:00", toTime: "00:00" });
    this.event1 = undefined;
    this.event2 = undefined;
    console.log(this.event1);
    console.log(this.event2);
  }

  loadTrasnactionResponse(event: string) {
    const fromDateTime =
      this.service.formatDateNew(
        this.reportform.value.fromDate?.toString()
      ) +
      " " +
      this.reportform.value.fromTime;

    const toDateTime =
      this.service.formatDateNew(
        this.reportform.value.toDate?.toString()
      ) +
      " " +
      this.reportform.value.toTime;

      console.log("--------------");
      console.log(this.reportform.value.fromDate?.toString());
    switch (this.route.snapshot.paramMap.get("id")) {
      case "1":
        this.service
          .getSalesTotalReport(fromDateTime, toDateTime)
          .subscribe((response) => {
            this.sales = response;
            this.generateTotalSalePDF(fromDateTime, toDateTime, event);
          });
        break;
      case "2":
        this.service
          .getPMWiseReport(fromDateTime, toDateTime)
          .subscribe((response) => {
            this.pmWiseSales = response;
            this.generatePMWisePDF(fromDateTime, toDateTime, event);
          });
        break;
      case "3":
        this.service
          .getPumpWiseReport(fromDateTime, toDateTime)
          .subscribe((response) => {
            this.pumpWiseSale = response;
            this.service
              .getTerminalWiseReport(fromDateTime, toDateTime)
              .subscribe((response) => {
                this.terminalWiseSale = response;

                this.generatePumpAndTerminalPDF(
                  fromDateTime,
                  toDateTime,
                  event
                );
              });
          });
        break;
      case "4":
        this.service
          .getSalesTotalReport(fromDateTime, toDateTime)
          .subscribe((response) => {
            this.sales = response;
            // this.function1(fromDateTime, toDateTime);
          });
        break;
      case "5":
        this.service
          .getPriceBreakData(fromDateTime, toDateTime)
          .subscribe((response) => {
            this.priceBreak = response;
            this.generatePriceBreakPDF(fromDateTime, toDateTime, event);
          });
        break;
      case "6":
        this.service
          .getGradeSalesData(fromDateTime, toDateTime)
          .subscribe((response) => {
            this.gradeSales = response;
            this.generateGradeSalesPDF(fromDateTime, toDateTime, event);
          });
        break;
    }
  }

  generateTotalSalePDF(fDate: any, tDate: any, event: string) {
    const pdfContent = {
      content: [
        {
          columns: [
            {
              width: "*",
              text: `${this.companyName}`,
              fontSize: 15,
              bold: true,
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: `Print Date : ${this.service
                .formatDateNew(new Date().toString())
                .replaceAll("-", "/")} \n Print Time: ${new Date()
                .toTimeString()
                .slice(0, 8)}\n\n\n`,
              fontSize: 9,
            },
          ],
        },
        {
          columns: [
            {
              text: "-------------------------------------------------------------------------------------------------------------------------------",
              bold: true,
            },
          ],
        },
        {
          columns: [
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: "Sales Report",
              bold: true,
              fontSize: 13,
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: "",
            },
          ],
        },
        {
          columns: [
            {
              text: "-------------------------------------------------------------------------------------------------------------------------------",
              bold: true,
            },
          ],
        },
        {
          columns: [
            {
              text: `From: ${fDate.replaceAll(
                "-",
                "/"
              )}    To:   ${tDate.replaceAll("-", "/")}\n\n\n`,
              fontSize: 9,
            },
          ],
        },
        {
          layout: "lightHorizontalLines", // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [
              "*",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
              "auto",
            ],

            body: [
              [
                {
                  text: "Receipt#",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Date",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Time",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Pump",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Blend",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Quantity(Ltrs)",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "UnitPrice",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Amount",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Pay Mode",
                  border: [!1, !1, !1, !0],
                },
              ],
              ...this.sales.map((A) => [
                {
                  text: A.transactionNumber,
                  border: [!1, !1, !1, !1],
                },
                {
                  text: A.dDate,
                  border: [!1, !1, !1, !1],
                },
                {
                  text: A.dTime,
                  border: [!1, !1, !1, !1],
                },
                {
                  text: A.pumpID,
                  border: [!1, !1, !1, !1],
                },
                {
                  text: A.productName,
                  border: [!1, !1, !1, !1],
                },
                {
                  text: parseFloat(A.quantity).toFixed(2),
                  border: [!1, !1, !1, !1],
                },
                {
                  text: parseFloat(A.unitPrice).toFixed(3),
                  border: [!1, !1, !1, !1],
                },
                {
                  text: parseFloat(A.amount).toFixed(3),
                  border: [!1, !1, !1, !1],
                },
                {
                  text: A.cardType,
                  border: [!1, !1, !1, !1],
                },
              ]),
              [
                {
                  text: "Totals",
                  colSpan: 3,
                  border: [!1, !0, !1, !0],
                },
                {
                  text: "",
                  border: [!1, !0, !1, !0],
                },
                {
                  text: "",
                  border: [!1, !0, !1, !0],
                },
                {
                  text: "",
                  border: [!1, !0, !1, !0],
                },
                {
                  text: "",
                  border: [!1, !0, !1, !0],
                },
                {
                  text: this.sales
                    .reduce((A, a) => A + parseFloat(a.quantity), 0)
                    .toFixed(2),
                  border: [!1, !0, !1, !0],
                },
                {
                  text: "",
                  border: [!1, !0, !1, !0],
                },
                {
                  text: this.sales
                    .reduce((A, a) => A + parseFloat(a.amount), 0)
                    .toFixed(3),
                  border: [!1, !0, !1, !0],
                },
                {
                  text: "",
                  border: [!1, !0, !1, !0],
                },
              ],
            ],
          },
          fontSize: 8,
        },
      ],
    };

    let pdf = pdfMake.createPdf(pdfContent);
    event === "open"
      ? pdf.open()
      : event === "download"
      ? pdf.download()
      : event === "print"
      ? pdf.print()
      : console.log(event);
  }

  generatePMWisePDF(fDate: any, tDate: any, event: string) {
    const pdfContent = {
      content: [
        {
          columns: [
            {
              width: "*",
              text: `${this.companyName}`,
              fontSize: 15,
              bold: true,
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: `Print Date : ${this.service
                .formatDateNew(new Date().toString())
                .replaceAll("-", "/")} \n Print Time: ${new Date()
                .toTimeString()
                .slice(0, 8)}\n\n\n`,
              fontSize: 9,
            },
          ],
        },
        {
          columns: [
            {
              text: "-------------------------------------------------------------------------------------------------------------------------------",
              bold: true,
            },
          ],
        },
        {
          columns: [
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "auto",
              text: "Method of Payment",
              bold: true,
              fontSize: 13,
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: "",
            },
          ],
        },
        {
          columns: [
            {
              text: "-------------------------------------------------------------------------------------------------------------------------------",
              bold: true,
            },
          ],
        },
        {
          columns: [
            {
              text: `From: ${fDate.replaceAll(
                "-",
                "/"
              )}    To:   ${tDate.replaceAll("-", "/")}\n\n\n`,
              fontSize: 9,
            },
          ],
        },
        {
          table: {
            headerRows: 1,
            widths: [100, 100, 100, "auto"],
            body: [
              [
                {
                  text: "CardTypeName",
                  border: [!1, !0, !1, !0],
                  bold: !0,
                  fontSize: 9,
                },
                {
                  text: "Quantity",
                  border: [!1, !0, !1, !0],
                  bold: !0,
                  fontSize: 9,
                },
                {
                  text: "TotalAmt",
                  border: [!1, !0, !1, !0],
                  bold: !0,
                  fontSize: 9,
                },
                {
                  text: "Date",
                  border: [!1, !0, !1, !0],
                  bold: !0,
                  fontSize: 9,
                },
              ],
              ...this.pmWiseSales.map((A) => [
                {
                  text: A.cardType,
                  border: [!1, !1, !1, !1],
                  fontSize: 8,
                },
                {
                  text: parseFloat(A.quantity).toFixed(2),
                  border: [!1, !1, !1, !1],
                  fontSize: 8,
                },
                {
                  text: parseFloat(A.totalAmt).toFixed(3),
                  border: [!1, !1, !1, !1],
                  fontSize: 8,
                },
                {
                  text: new Date(A.dDate),
                  border: [!1, !1, !1, !1],
                  fontSize: 8,
                },
              ]),
              [
                {
                  text: "",
                  border: [!1, !0, !1, !0],
                  fontSize: 8,
                },
                {
                  text: this.pmWiseSales
                    .reduce((A, a) => A + parseFloat(a.quantity), 0)
                    .toFixed(2),
                  border: [!1, !0, !1, !0],
                  bold: !0,
                  fontSize: 8,
                },
                {
                  text: this.pmWiseSales
                    .reduce((A, a) => A + parseFloat(a.totalAmt), 0)
                    .toFixed(3),
                  border: [!1, !0, !1, !0],
                  bold: !0,
                  fontSize: 8,
                },
                {
                  text: "",
                  border: [!1, !0, !1, !0],
                },
              ],
            ],
          },
        },
      ],
    };

    let pdf = pdfMake.createPdf(pdfContent);
    console.log(this.sales);
    event === "open"
      ? pdf.open()
      : event === "download"
      ? pdf.download()
      : event === "print"
      ? pdf.print()
      : console.log(event);
  }

  generatePumpAndTerminalPDF(fDate: any, tDate: any, event: string) {
    const pdfContent = {
      content: [
        {
          columns: [
            {
              width: "*",
              text: `${this.companyName}`,
              fontSize: 15,
              bold: true,
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: `Print Date : ${this.service
                .formatDateNew(new Date().toString())
                .replaceAll("-", "/")} \n Print Time: ${new Date()
                .toTimeString()
                .slice(0, 8)}\n\n\n`,
              fontSize: 9,
            },
          ],
        },
        {
          columns: [
            {
              text: "-------------------------------------------------------------------------------------------------------------------------------",
              bold: true,
            },
          ],
        },
        {
          columns: [
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "auto",
              text: "Method of Payment",
              bold: true,
              fontSize: 13,
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: "",
            },
          ],
        },
        {
          columns: [
            {
              text: "-------------------------------------------------------------------------------------------------------------------------------",
              bold: true,
            },
          ],
        },
        {
          columns: [
            {
              text: `From: ${fDate.replaceAll(
                "-",
                "/"
              )}    To:   ${tDate.replaceAll("-", "/")}\n\n\n`,
              fontSize: 9,
            },
          ],
        },
        {
          columns: [
            [
              {
                text: "Dispenser Sales",
                fontSize: 11,
                bold: !0,
                margin: 7,
              },
              {
                table: {
                  headerRows: 1,
                  widths: ["auto", "auto", "auto", "auto"],
                  body: [
                    [
                      {
                        text: "Dispenser",
                        border: [!1, !0, !1, !0],
                      },
                      {
                        text: "Quantity(Ltrs)",
                        border: [!1, !0, !1, !0],
                      },
                      {
                        text: "Amount",
                        border: [!1, !0, !1, !0],
                      },
                      {
                        text: "Date",
                        border: [!1, !0, !1, !0],
                      },
                    ],
                    ...this.pumpWiseSale.map((A) => [
                      {
                        text: A.pumpID,
                        border: [!1, !1, !1, !1],
                      },
                      {
                        text: parseFloat(A.quantity).toFixed(2),
                        border: [!1, !1, !1, !1],
                      },
                      {
                        text: parseFloat(A.totalAmount).toFixed(3),
                        border: [!1, !1, !1, !1],
                      },
                      {
                        text: A.dDate.replaceAll("-", "/"),
                        bold: !0,
                        border: [!1, !1, !1, !1],
                      },
                    ]),
                    [
                      {
                        text: "Totals",
                        border: [!1, !1, !1, !0],
                        bold: !0,
                      },
                      {
                        text: this.pumpWiseSale
                          .reduce((A, a) => A + parseFloat(a.quantity), 0)
                          .toFixed(2),
                        border: [!1, !1, !1, !0],
                        bold: !0,
                      },
                      {
                        text: this.pumpWiseSale
                          .reduce((A, a) => A + parseFloat(a.totalAmount), 0)
                          .toFixed(3),
                        border: [!1, !1, !1, !0],
                        bold: !0,
                      },
                      {
                        text: "",
                        border: [!1, !1, !1, !0],
                        bold: !0,
                      },
                    ],
                  ],
                },
                fontSize: 9,
              },
            ],
            [
              {
                text: "Terminal Sales",
                fontSize: 11,
                bold: !0,
                margin: 7,
                border: !0,
              },
              {
                table: {
                  headerRows: 1,
                  widths: ["auto", "auto", "auto", "auto"],
                  body: [
                    [
                      {
                        text: "TerminalID",
                        border: [!1, !0, !1, !0],
                      },
                      {
                        text: "Quantity(Ltrs)",
                        border: [!1, !0, !1, !0],
                      },
                      {
                        text: "Amount",
                        border: [!1, !0, !1, !0],
                      },
                      {
                        text: "Date",
                        border: [!1, !0, !1, !0],
                      },
                    ],
                    ...this.terminalWiseSale.map((A) => [
                      {
                        text: A.terminalID,
                        border: [!1, !1, !1, !1],
                      },
                      {
                        text: parseFloat(A.quantity).toFixed(2),
                        border: [!1, !1, !1, !1],
                      },
                      {
                        text: parseFloat(A.totalAmt).toFixed(3),
                        border: [!1, !1, !1, !1],
                      },
                      {
                        text: A.dDate.replaceAll("-", "/"),
                        bold: !0,
                        border: [!1, !1, !1, !1],
                      },
                    ]),
                    [
                      {
                        text: "Totals",
                        border: [!1, !1, !1, !0],
                        bold: !0,
                      },
                      {
                        text: this.terminalWiseSale
                          .reduce((A, a) => A + parseFloat(a.quantity), 0)
                          .toFixed(2),
                        border: [!1, !1, !1, !0],
                        bold: !0,
                      },
                      {
                        text: this.terminalWiseSale
                          .reduce((A, a) => A + parseFloat(a.totalAmt), 0)
                          .toFixed(3),
                        border: [!1, !1, !1, !0],
                        bold: !0,
                      },
                      {
                        text: "",
                        border: [!1, !1, !1, !0],
                        bold: !0,
                      },
                    ],
                  ],
                },
                fontSize: 9,
              },
            ],
          ],
        },
      ],
    };

    let pdf = pdfMake.createPdf(pdfContent);
    console.log(this.sales);
    event === "open"
      ? pdf.open()
      : event === "download"
      ? pdf.download()
      : event === "print"
      ? pdf.print()
      : console.log(event);
  }

  generatePriceBreakPDF(fDate: any, tDate: any, event: string) {
    const pdfContent = {
      content: [
        {
          columns: [
            {
              width: "*",
              text: `${this.companyName}`,
              fontSize: 15,
              bold: true,
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: `Print Date : ${this.service
                .formatDateNew(new Date().toString())
                .replaceAll("-", "/")} \n Print Time: ${new Date()
                .toTimeString()
                .slice(0, 8)}\n\n\n`,
              fontSize: 9,
            },
          ],
        },
        {
          columns: [
            {
              text: "-------------------------------------------------------------------------------------------------------------------------------",
              bold: true,
            },
          ],
        },
        {
          columns: [
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "auto",
              text: "Fuel Price Break Report",
              bold: true,
              fontSize: 13,
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: "",
            },
          ],
        },
        {
          columns: [
            {
              text: "-------------------------------------------------------------------------------------------------------------------------------",
              bold: true,
            },
          ],
        },
        {
          columns: [
            {
              text: `From: ${fDate.replaceAll(
                "-",
                "/"
              )}    To:   ${tDate.replaceAll("-", "/")}\n\n\n`,
              fontSize: 9,
            },
          ],
        },
        {
          layout: "lightHorizontalLines", // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [
              "*",
              "auto",
              "auto",
              "auto",
              "auto"
            ],

            body: [
              [
                {
                  text: "Grade",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Grade Price Name",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Delivery Price",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Delivery Value",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Delivery Quantity",
                  border: [!1, !1, !1, !0],
                }
              ],
              ...this.priceBreak.map((A) => [
                {
                  text: A.gradeName,
                  border: [!1, !1, !1, !1],
                },
                {
                  text: A.gradeName,
                  border: [!1, !1, !1, !1],
                },
                {
                  text: A.unitPrice,
                  border: [!1, !1, !1, !1],
                },
                {
                  text: A.totalAmount,
                  border: [!1, !1, !1, !1],
                },
                {
                  text: A.totalQuantity,
                  border: [!1, !1, !1, !1],
                }
              ]),
              [
                {
                  text: "Grand Total:",
                  border: [!1, !0, !1, !0],
                },
                {
                  text: "",
                  border: [!1, !0, !1, !0],
                },
                {
                  text: "",
                  border: [!1, !0, !1, !0],
                },
                {
                  text: this.priceBreak
                    .reduce((A, a) => A + a.totalAmount, 0)
                    .toFixed(2),
                  border: [!1, !0, !1, !0],
                },
                {
                  text: this.priceBreak
                    .reduce((A, a) => A + a.totalQuantity, 0)
                    .toFixed(3),
                  border: [!1, !0, !1, !0],
                },
              ],
            ],
          },
          fontSize: 8,
        },
      ],
    };

    let pdf = pdfMake.createPdf(pdfContent);
    event === "open"
      ? pdf.open()
      : event === "download"
      ? pdf.download()
      : event === "print"
      ? pdf.print()
      : console.log(event);
  }

  generateGradeSalesPDF(fDate: any, tDate: any, event: string) {
    const pdfContent = {
      content: [
        {
          columns: [
            {
              width: "*",
              text: `${this.companyName}`,
              fontSize: 15,
              bold: true,
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: `Print Date : ${this.service
                .formatDateNew(new Date().toString())
                .replaceAll("-", "/")} \n Print Time: ${new Date()
                .toTimeString()
                .slice(0, 8)}\n\n\n`,
              fontSize: 9,
            },
          ],
        },
        {
          columns: [
            {
              text: "-------------------------------------------------------------------------------------------------------------------------------",
              bold: true,
            },
          ],
        },
        {
          columns: [
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "auto",
              text: "Grade Sales Report",
              bold: true,
              fontSize: 13,
            },
            {
              width: "*",
              text: "",
            },
            {
              width: "*",
              text: "",
            },
          ],
        },
        {
          columns: [
            {
              text: "-------------------------------------------------------------------------------------------------------------------------------",
              bold: true,
            },
          ],
        },
        {
          columns: [
            {
              text: `From: ${fDate.replaceAll(
                "-",
                "/"
              )}    To:   ${tDate.replaceAll("-", "/")}\n\n\n`,
              fontSize: 9,
            },
          ],
        },
        {
          layout: "lightHorizontalLines", // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [
              "*",
              "auto",
              "auto"
            ],

            body: [
              [
                {
                  text: "Grade",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Value",
                  border: [!1, !1, !1, !0],
                },
                {
                  text: "Quantity",
                  border: [!1, !1, !1, !0],
                }
              ],
              ...this.gradeSales.map((A) => [
                {
                  text: A.gradeName,
                  border: [!1, !1, !1, !1],
                },
                {
                  text: A.totalAmount,
                  border: [!1, !1, !1, !1],
                },
                {
                  text: A.quantity,
                  border: [!1, !1, !1, !1],
                }
              ]),
              [
                {
                  text: "Grand Total:",
                  border: [!1, !0, !1, !0],
                },
                {
                  text: this.gradeSales
                    .reduce((A, a) => A + a.totalAmount, 0)
                    .toFixed(2),
                  border: [!1, !0, !1, !0],
                },
                {
                  text: this.gradeSales
                    .reduce((A, a) => A + a.quantity, 0)
                    .toFixed(3),
                  border: [!1, !0, !1, !0],
                }
              ],
            ],
          },
          fontSize: 8,
        },
      ],
    };

    let pdf = pdfMake.createPdf(pdfContent);
    event === "open"
      ? pdf.open()
      : event === "download"
      ? pdf.download()
      : event === "print"
      ? pdf.print()
      : console.log(event);
  }

}
