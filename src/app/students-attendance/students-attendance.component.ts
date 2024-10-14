import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';

highchartsMore(Highcharts);

@Component({
  selector: 'app-students-attendance',
  templateUrl: './students-attendance.component.html',
  styleUrls: ['./students-attendance.component.scss']
})
export class StudentsAttendanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    Highcharts.chart('student-attendance', {

      title: {
          text: 'Students Attendance',
          align: 'left',
          style: {"color": "#003C71", "fontSize": "14px"}
      },
  
      subtitle: {
          // text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
          align: 'left'
      },
  
      yAxis: {
          title: {
              text: 'Attendance'
          }
      },
  
      xAxis: {
          accessibility: {
              rangeDescription: 'Range: 1 to 30'
          }
      },
  
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
  
      plotOptions: {
          series: {
              label: {
                  connectorAllowed: true
              },
              pointStart: 1
          }
      },
      colors:['#884ea0'],
      series: [{
          name: '',
          data: [
             50,45,88,30,58,55,79,58,44,88
          ]
      }],
  
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }],
      }
  
  }as Highcharts.Options);
  
  }
}
