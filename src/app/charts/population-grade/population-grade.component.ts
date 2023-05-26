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
  colours: string[] = [];

  constructor(private service: AllservicesService) {
    this.getCharts();
  }

  Highcharts: typeof Highcharts = Highcharts;

  chartDetails: GradePropotion[] = [];
  

  getCharts() {
    this.service.getGradeProportion().subscribe((res) => {
      this.chartDetails = res;
      
      res.forEach(re =>{
        const dataObj: DataObject = {
          name: '',
          y: 0,
          color: '',
          sliced: false,
          selected: false
        };
        dataObj.name = re.gradeName;
        dataObj.y = + re.propotion;
        let number = + re.backColour;
        let hexStr = '#' +number.toString(16);
        dataObj.color = hexStr;
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
  color: string,
  sliced: boolean,
  selected: boolean
}

