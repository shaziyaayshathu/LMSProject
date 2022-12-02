import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountserviceService } from 'src/app/adminservices/countservice.service';
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
  image:any;
  constructor(private router:Router,
    private courseservice:CourseserviceService,
    private countservice:CountserviceService) { }

  ngOnInit(): void {
  }
  addcourse(){
   
    let data={"courseName":this.courseName,"description":this.description,"courseID":this.courseID,"image":this.image}
    this.courseservice.addcourse(data).subscribe(res=>{

      alert('added suucessfully')
      this.router.navigateByUrl('/admin/courses')
    })
  }
}
