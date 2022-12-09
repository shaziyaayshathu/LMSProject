import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Student/student.service';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogeComponent } from 'src/app/Student/courses/course-dialoge/course-dialoge.component';

@Component({
  selector: 'app-trainer-main',
  templateUrl: './trainer-main.component.html',
  styleUrls: ['./trainer-main.component.css']
})
export class TrainerMainComponent implements OnInit {
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
    console.log('clicked')
  }

}
