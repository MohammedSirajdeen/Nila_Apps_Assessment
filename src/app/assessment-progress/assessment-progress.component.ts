import { Component, OnInit } from '@angular/core';


import * as Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
// import Gauge from 'highcharts/modules/solid-gauge';



highchartsMore(Highcharts);
// Gauge(Highcharts);

@Component({
  selector: 'app-assessment-progress',
  templateUrl: './assessment-progress.component.html',
  styleUrls: ['./assessment-progress.component.scss']
})
export class AssessmentProgressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    Highcharts.chart('assessment-progress', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Assessment Progress',
          align: 'left', 
          style: {"color": "#003C71", "fontSize": "14px"}
         
      },
      subtitle: {
        //   text:
        //       'Source: <a target="_blank" ' +
        //       'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
        //   align: 'left'
      },
      xAxis: {
          categories: ['Assignment', 'Quiz', 'Presentation', 'Lab', 'Viva'],
          crosshair: true,
          accessibility: {
              description: 'Countries'
          }
      },
      yAxis: {
          min: 0,
          max : 100,
          title: {
            //   text: '1000 metric tons (MT)'
          }
      },
      tooltip: {
          valueSuffix: ' (100%)'
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      
      colors:['#b2cd75', '#e5e7e9'],
      series: [
          {
              name: 'Pending',
              data: [78, 58, 99, 98, 75]
          },
          {
              name: 'Completed',
              data: [75, 98, 99, 58, 78]
          }
      ],
  }as Highcharts.Options);
  
  }

}
