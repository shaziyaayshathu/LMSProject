import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  noOfCourses:any=4;
  noOfTrainers:any=4;
  noOfStudents:any=60;
  constructor(private router:Router) { }

  ngOnInit(): void {
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
