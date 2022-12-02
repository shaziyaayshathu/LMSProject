import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountserviceService } from 'src/app/adminservices/countservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  noOfCourses:any;
  noOfTrainers:any;
  noOfStudents:any;
  constructor(private router:Router,
    private countservice:CountserviceService) { }

  ngOnInit(): void {
     this.coursecount()
     this.studentcount()
     this.trainercount()
  }
  coursecount(){
     this.countservice.getCourseCount().subscribe((res:any)=>{
           this.noOfCourses=res;
     })
  }
  studentcount(){
    this.countservice.getStudentCount().subscribe((res:any)=>{
      this.noOfStudents=res;
})
  }
  trainercount(){
    this.countservice.getTrainerCount().subscribe((res:any)=>{
      this.noOfTrainers=res;
})
  }
  viewStudents(){
     this.router.navigateByUrl('/admin/students')
  }
  viewTrainers(){
    this.router.navigateByUrl('/admin/trainers')
  }
  viewCourses(){
    this.router.navigateByUrl('/admin/courses')
  }
}
