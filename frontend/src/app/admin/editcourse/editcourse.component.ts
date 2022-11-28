import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  course:any;
  courseID:any;
  description:any;
  updatecourse(){
   
    this.router.navigateByUrl('/admin/courses')
  }
  canceledit(){
    this.router.navigateByUrl('/admin/courses')
  }
}
