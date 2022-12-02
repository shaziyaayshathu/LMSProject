import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseserviceService } from 'src/app/adminservices/courseservice.service';
import { TrainerserviceService } from 'src/app/adminservices/trainerservice.service';

@Component({
  selector: 'app-edittrainer',
  templateUrl: './edittrainer.component.html',
  styleUrls: ['./edittrainer.component.css']
})
export class EdittrainerComponent implements OnInit {

  constructor(private router:Router,
    private trainerservice:TrainerserviceService,
    private url:ActivatedRoute,
    private courseservice:CourseserviceService) { }
    quals=["BE/B TECH","M TECH","MCA","Msc computerScience"]
  ngOnInit(): void {
    this.id=this.url.snapshot.params['id'];
  console.log(this.id)
  
  this.trainerservice.edittrainer(this.id).subscribe((res:any)=>{
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
  role:any="trainer";
  gender:any;
  courses:any=[];
  id:any;
  updatetrainer(){
    let data={"_id":this.id,"name":this.name,"courseID":this.courseID,
  "email":this.email,"qualification":this.qualification,"dob":this.dob,
  "address":this.address,"phone":this.phone,"password":this.password,
  "role":this.role,"gender":this.gender}
   this.trainerservice.updatetrainer(this.id,data).subscribe((res)=>{
    console.log(res)
   })
    this.router.navigateByUrl('/admin/trainers')
  }
  canceledit(){
    this.router.navigateByUrl('/admin/trainers')
  }
  getcourseids(){
    this.courseservice.getcourses().subscribe((res:any)=>{
     this.courses=res;
    })
   }
  
}
