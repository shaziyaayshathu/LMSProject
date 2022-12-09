import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent implements OnInit {

  feedbackData ={
    studentName: localStorage.getItem('name'),
    feedback : '',
    course : localStorage.getItem('course'),
    courseName: ''
  }
  id = localStorage.getItem('course')
  coursedetails:any
 
  constructor(private student:StudentService) { }

  ngOnInit(): void {

    this.student.courseName(this.id).subscribe(res=>{
      // console.log(res)
      this.coursedetails = res
      this.feedbackData.courseName = this.coursedetails[0].courseName 
      // console.log(this.courseName)
      // this.feedbackData.course = this.courseName

    })
 
  }

   feedback(data:any){
    // console.log(data)
    this.student.feedback(data).subscribe(res=>{
      // console.log(res)
    })
    this.feedbackData.feedback = ''

  }

}
