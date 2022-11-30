import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseserviceService } from 'src/app/adminservices/courseservice.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  courseName:any;
  courseID:any;
  description:any;
  constructor(private router:Router,private courseservice:CourseserviceService) { }

  ngOnInit(): void {
  }
  addcourse(){
   
    let data={"courseName":this.courseName,"description":this.description,"courseID":this.courseID}
    this.courseservice.addcourse(data).subscribe(res=>{
      alert('added suucessfully')
      this.router.navigateByUrl('/admin/courses')
    })
  }
}
