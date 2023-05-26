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
      response.forEach((item) => {
        let number = + item.backColour;
        let hexStr = '#' +number.toString(16);
        item.backColour = hexStr;
        this.salesData.push(item);

      });
      const charData = this.salesData.map(item => ({
        name: item.productName,
        y: parseFloat(item.totalAmount),
        color: item.backColour
      }))
      const chartOptions: Highcharts.Options = {
        series: [
          {
            type: "column",
            name: "Grades",
            data: charData,
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
          categories: charData.map(item => item.name),
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
            '<tr><td style="padding:0">{series.name}: </td>' +
            '<td style="color:{black};padding:0;"><b>{point.y:.1f}</b></td></tr>',
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
  getColorByIndex(index: number): string {
    const colors = ['#FF0000', '#00FF00', '#0000FF']; // Custom color array
    return colors[index % colors.length]; // Use modulo to repeat colors if there are more data points than colors
  }
}
