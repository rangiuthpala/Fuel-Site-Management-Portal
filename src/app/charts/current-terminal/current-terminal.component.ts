import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AllservicesService, TerminalSales } from 'src/app/service/allservices.service';

@Component({
  selector: 'app-current-terminal',
  templateUrl: './current-terminal.component.html',
  styleUrls: ['./current-terminal.component.scss']
})
export class CurrentTerminalComponent {
  Highcharts: typeof Highcharts = Highcharts;
  data: number[] = [];
  categories: string[] = [];
  terminalData: TerminalSales[] = [];

  constructor(private service: AllservicesService) {
    this.getTerminalChart();
  }

  getTerminalChart() {
    this.service.getTerminalSales().subscribe(response => {
      this.terminalData = response;

      this.terminalData.forEach(item => {
        this.data.push(+ item.terminalName);
        this.categories.push(item.terminalId);
      });
      const chartOptions: Highcharts.Options = {
        series: [
          {
            type: 'column',
            name: 'Terminal',
            data: this.data
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
          categories: this.categories,
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
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
      Highcharts.chart('chartTerminalSales', chartOptions);
    });
  }

  
}
