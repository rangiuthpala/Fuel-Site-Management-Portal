import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-current-terminal',
  templateUrl: './current-terminal.component.html',
  styleUrls: ['./current-terminal.component.scss']
})
export class CurrentTerminalComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'column',
        name: 'Terminal',
        data: [60]
      },
    ],

  credits:{
    enabled: false
  },
    title: {
      text: 'Current Sales by Terminal',
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
