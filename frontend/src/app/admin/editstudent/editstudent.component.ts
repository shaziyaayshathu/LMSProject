import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseserviceService } from 'src/app/adminservices/courseservice.service';
import { StudentserviceService } from 'src/app/adminservices/studentservice.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  constructor(private router:Router,
    private studentservice:StudentserviceService,
    private url:ActivatedRoute
    ,private courseservice:CourseserviceService){ }
    quals=["BE/B TECH","M TECH","MCA","Msc computerScience"]
  ngOnInit(): void {
    this.id=this.url.snapshot.params['id'];
  console.log(this.id)
  
  this.studentservice.editstudent(this.id).subscribe((res:any)=>{
    console.log(res)
    this.name=res.name;
    this.email=res.email;
    this.address=res.address;
    this.dob=res.dob;
    this.qualification=res.qualification;
    this.phone=res.phone;
    this.courseID=res.courseID;
    this.password=res.password;
    this.role=res.role;
    this.gender=res.gender
  })
  this.getcourseids()
  }
  name:any;
  email:any;
  qualification:any;
  dob:any;
  address:any;
  phone:any;
  courseID:any;
  password:any;
  role:any;
  courses:any=[];
  gender:any;
  id:any;
  updatestudent(){
    let data={"_id":this.id,"name":this.name,"courseID":this.courseID,
  "email":this.email,"qualification":this.qualification,"dob":this.dob,
  "address":this.address,"phone":this.phone,"password":this.password,
  "role":this.role,"gender":this.gender}
   this.studentservice.updatestudent(this.id,data).subscribe((res)=>{
    console.log(res)
   })
    this.router.navigateByUrl('/admin/students')
  }
  canceledit(){
    this.router.navigateByUrl('/admin/students')
  }
  getcourseids(){
    this.courseservice.getcourses().subscribe((res:any)=>{
     this.courses=res;
    })
   }
}
