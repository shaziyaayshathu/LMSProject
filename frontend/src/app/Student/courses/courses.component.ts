import { Component, OnInit} from '@angular/core';
import { StudentService } from '../student.service';
import {MatDialog} from '@angular/material/dialog';
import { CourseDialogeComponent } from './course-dialoge/course-dialoge.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})


export class CoursesComponent implements OnInit {

  courses:any

  constructor(private student:StudentService, private matDialog: MatDialog) { }

  ngOnInit(): void {

    this.student.courses().subscribe(res=>{
      // console.log(res)
      this.courses=res
      console.log(res)
    })

  }
  dialog(id:any){
    this.matDialog.open(CourseDialogeComponent,{data:id})
  }
}

