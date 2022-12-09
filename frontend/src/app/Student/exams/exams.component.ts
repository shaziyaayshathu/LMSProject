import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {

  exams:any
  course = localStorage.getItem('course')
  id:any

  constructor(private router:Router, private student:StudentService) { }

  ngOnInit(): void {

    this.student.exams(this.course).subscribe(res=>{
      this.exams = res
      console.log(this.exams)
    })

  }

  attemptExam(id:any){
      // console.log('A',id)
      this.router.navigateByUrl(`/student-home/student-exampage/${id}`) 
  }
}
 