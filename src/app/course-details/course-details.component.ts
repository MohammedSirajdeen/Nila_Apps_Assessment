import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  items = [
    { id: 1, title: 'Course Code', course_code: [{id:1,name:'BA3102'}], type:'text' },
    { id: 2, title: 'Course Name', course_code: [{id:1,name:'Quantitative techniques'}],type:'text' },
    { id: 3, title: 'Course Type', course_code: [{id:1,name:'Program Elective'}],type:'text'},
    { id: 4, title: 'Course Period', course_code: [{id:1,name:'Semester - I'}],type:'text'},
    { id: 5, title: 'Credits(4)', course_code: [{
      id:1,name:'Lecture - 3'},
      {id:2,name:'Tutorial - 0'},
      {id:3,name:'Practical - 1'},
      { id:4,name:'Project - 0'}] ,type:'text'
    },
    { id: 6, title: 'Course Outcomes (COs)',course_code : null, course_code_number: [{id:1,name:[{code:'CO2'},{code:'CO4'},{code:'CO5'},{code:'CO6'},{code:'CO7'},{code:'CO8'}]}], type:'btn',bgColor:'rgb(178, 205, 117)',color:'#fff' },

    { id: 6, title: 'Mapped to this Course',course_code : null, course_code_number: [{id:1,name:[{code:'CO2'},{code:'CO4'},{code:'CO5'},{code:'CO6'},{code:'CO7'},{code:'CO8'}]}], type:'btn',bgColor:'#2471a3',color:'#fff' },
            
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
