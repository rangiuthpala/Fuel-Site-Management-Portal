import { Component } from "@angular/core";
import * as Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import { AllservicesService } from "src/app/service/allservices.service";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);

@Component({
  selector: "app-hourly-sales-grade",
  templateUrl: "./hourly-sales-grade.component.html",
  styleUrls: ["./hourly-sales-grade.component.scss"],
})
export class HourlySalesGradeComponent {
  Highcharts: typeof Highcharts = Highcharts;

  salesList: Highcharts.SeriesOptionsType[] = [];
  

  constructor(private service: AllservicesService) {
    this.getCurrentHourlySales();
  }

  getCurrentHourlySales() {
    this.service.getHourlySalesCurrent().subscribe((response) => {
      console.log(response);
      response.forEach(item => {
        let dataCat: string[] = [];
        const sales: Highcharts.SeriesOptionsType = {
          type: 'line',
          name: '',
          data: [],
        }
        sales.name = item.ItemName;
        sales.data = item.Sales.map(a => + a.TotalSales);
        dataCat = item.Sales.map(a => a.SaleHour);
        this.salesList.push(sales);

      });      

      const chartOptions: Highcharts.Options = {
        series: this.salesList,

        chart: {},
        credits: {
          enabled: false,
        },
        title: {
          text: "Hourly Sales by Grade",
          align: "center",
        },
        xAxis: {
          categories: ["0"],
          crosshair: true,
        },
        yAxis: {
          min: 0,
          title: {
            text: "Sales",
          },
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
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

      Highcharts.chart("chartLineContainer", chartOptions);
    });
  }
}