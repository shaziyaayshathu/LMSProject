import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course:any;
  courseID:any;
  description:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addcourse(){
   
    this.router.navigateByUrl('/admin/courses')
  }
}
