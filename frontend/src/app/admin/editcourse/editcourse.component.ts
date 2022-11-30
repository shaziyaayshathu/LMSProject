import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CourseserviceService } from 'src/app/adminservices/courseservice.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  constructor(private router:Router,
    private courseservice:CourseserviceService,
    private url:ActivatedRoute) { }
    // courseName:any;
    // courseID:any;
    // description:any;
    // id:any;

    courseName:any;
    courseID:any;
    description:any;
    id:any;

  ngOnInit(): void {
    //  this.id=this.url.snapshot.params['id'];
    //  console.log(this.id)
    //  this.courseservice.editcourse(this.id).subscribe((res:any)=>{
    //   console.log(res)
    //   this.courseID=res.courseID,     
    //   this.description=res.description,
    //   this.courseName=res.courseName
    //  })

       this.id=this.url.snapshot.params['id'];
  console.log(this.id)
  
  this.courseservice.editcourse(this.id).subscribe((res:any)=>{
    console.log(res)
    this.courseID=res.courseID;
    this.courseName=res.courseName;
    this.description=res.description
  })
  }
  
  updatecourse(){
   let data={"_id":this.id,"courseName":this.courseName,"courseID":this.courseID,"description":this.description}
   this.courseservice.updatecourse(this.id,data).subscribe((res)=>{
    console.log(res)
   })
    this.router.navigateByUrl('/admin/courses')
  }
  canceledit(){
    this.router.navigateByUrl('/admin/courses')
  }
}
