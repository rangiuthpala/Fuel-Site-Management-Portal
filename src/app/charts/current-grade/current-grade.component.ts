import { Component } from "@angular/core";
import * as Highcharts from "highcharts";
import {
  AllservicesService,
  ProductSales,
} from "src/app/service/allservices.service";

@Component({
  selector: "app-current-grade",
  templateUrl: "./current-grade.component.html",
  styleUrls: ["./current-grade.component.scss"],
})
export class CurrentGradeComponent {
  Highcharts: typeof Highcharts = Highcharts;
  categories: string[] = [];
  data: number[] = [];
  salesData: ProductSales[] = [];

  constructor(private service: AllservicesService) {
    this.getChartData();
  }

  getChartData() {
    this.service.getProductSales().subscribe((response) => {
      this.salesData = response;
      this.salesData.forEach((item) => {
        this.data.push(+item.totalAmount);
        this.categories.push(item.productName);
      });
      console.log(this.data);
      const chartOptions: Highcharts.Options = {
        series: [
          {
            type: "column",
            name: "Grades",
            data: this.data,
          },
        ],
        credits: {
          enabled: false,
        },
        title: {
          text: "Current Sales by Grade",
          align: "center",
        },
        xAxis: {
          categories: this.categories,
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Sales",
          },
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
      };

      Highcharts.chart('chartProductSales', chartOptions);
    });
  }
  
}
