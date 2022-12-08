import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-course-dialoge',
  templateUrl: './course-dialoge.component.html',
  styleUrls: ['./course-dialoge.component.css']
})
export class CourseDialogeComponent implements OnInit {

  course:any ={
    courseName: '',
    courseID: '',
    description: ''

  }

  constructor(@Inject(MAT_DIALOG_DATA) private data:string , private student:StudentService) { }

  ngOnInit(): void {
    // console.log(this.data)

      this.student.course(this.data).subscribe(res=>{
        this.course = res
      // console.log(this.course.courseName)
    })
  }

}
