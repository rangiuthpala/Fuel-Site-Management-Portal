import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-avarage-hourly-grade',
  templateUrl: './avarage-hourly-grade.component.html',
  styleUrls: ['./avarage-hourly-grade.component.scss']
})
export class AvarageHourlyGradeComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        name: 'Unleaded 91',
        data: [83.6, 78.8, 98.5, 93.4]
      },
      {
        type: 'line',
        name: 'Unleaded 95',
        data: [90, 95, 92, 87]
      },
      {
        type: 'line',
        name: 'Diesel',
        data: [75, 80, 85, 90]
      }
    ],

    chart: {
    
    },
    title: {
      text: 'Average Hourly Sales by Grade',
      align: 'center'
    },
    xAxis: {
      categories: [
        '5',
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Sales'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
  };
}
