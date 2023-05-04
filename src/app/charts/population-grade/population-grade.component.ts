import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-population-grade',
  templateUrl: './population-grade.component.html',
  styleUrls: ['./population-grade.component.scss']
})
export class PopulationGradeComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'pie',
        data: [{
          name: 'Unleaded 91',
          y: 70.67,
          sliced: true,
          selected: true
        }, {
          name: 'Unleaded 95',
          y: 14.77
        }, {
          name: 'Diesel',
          y: 4.86
        }, {
          name: 'Go Clear',
          y: 2.63
        },  ]
      },
    ],
    
  //   chart: {
  //     height: '340',
  //     width: '310',
  // },

  credits:{
    enabled: false
  },
  
    title: {
      text: 'Population of Grades',
      align: 'center'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
  
  };
}
