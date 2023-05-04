import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-current-grade',
  templateUrl: './current-grade.component.html',
  styleUrls: ['./current-grade.component.scss']
})
export class CurrentGradeComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'column',
        name: 'Grades',
        data: [83.6, 78.8, 98.5, 93.4]
      },
    ],
  credits:{
    enabled: false
  },
    title: {
      text: 'Current Sales by Grade',
      align: 'center'
    },
    xAxis: {
      categories: [
        'Unleaded 91',
        'Unleaded 95',
        'Diesel',
        'Go Clear',
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
