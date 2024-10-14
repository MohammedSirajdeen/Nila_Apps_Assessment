import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  buttonId = 0

  buttons = [
    {id:0, title:'All'},
    {id:1, title:'PEO-1',des:'Employability',icon:'description'},
    {id:2, title:'PEO-2',des:'Entrepreneur',icon:'description'},
    {id:3, title:'PEO-3',des:'Research & Development ',icon:'description'},
    {id:4, title:'PEO-4',des:'Contribution to business ',icon:'description'},
    {id:5, title:'PEO-4',des:'Contribution to society',icon:'description'},

  ]
  items = [
    { id: 1, title: 'Decision Making Skill', progress:60,content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',code:'PO1', bgColor:'#2471a3' },
    { id: 2, title: 'Communication Skill', progress:60,content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',code:'PO2', bgColor:'#2471a3' },
    { id: 3, title: 'Employability Skill',  progress:60,content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',code:'PO3', bgColor:'#2471a3' },
    { id: 4, title: 'Entrepreneurial Skill',  progress:60,content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',code:'PO4', bgColor:'#2471a3' },
    { id: 5, title: 'Contribution to Society',  progress:60,content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s' ,code:'PO5', bgColor:'#2471a3'},
    { id: 6, title: 'Problem Solving skill',  progress:60,content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s',code:'PO5', bgColor:'#2471a3' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(val:any){
    console.log(val);
    this.buttonId = val
    
  }
}
