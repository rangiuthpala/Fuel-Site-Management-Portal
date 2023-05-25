import { Component } from "@angular/core";
import { ChartData } from "chart.js";
import * as Highcharts from "highcharts";
import {
  AllservicesService,
  GradePropotion,
} from "src/app/service/allservices.service";

@Component({
  selector: "app-population-grade",
  templateUrl: "./population-grade.component.html",
  styleUrls: ["./population-grade.component.scss"],
})
export class PopulationGradeComponent {

  data: any[] = [];

  constructor(private service: AllservicesService) {
    this.getCharts();
  }

  Highcharts: typeof Highcharts = Highcharts;

  chartDetails: GradePropotion[] = [];
  

  getCharts() {
    this.service.getGradeProportion().subscribe((res) => {
      this.chartDetails = res;
      
      this.chartDetails.forEach(res =>{
        const dataObj: DataObject = {
          name: '',
          y: 0,
          sliced: false,
          selected: false
        };
        dataObj.name = res.gradeName;
        dataObj.y = + res.propotion;
        this.data.push(dataObj);
      });
      const chartOptions: Highcharts.Options = {
        series: [
          {
            type: "pie",
            data: this.data,
          },
        ],
        credits: {
          enabled: false,
        },
    
        title: {
          text: "Population of Grades",
          align: "center",
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            size:'100%',
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
            },
          },
        },
      };
      Highcharts.chart('chartContainer', chartOptions);
    });
  }
}

export interface DataObject {
  name: string,
  y: number,
  sliced: boolean,
  selected: boolean
}

