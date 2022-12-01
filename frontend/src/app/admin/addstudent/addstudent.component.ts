import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserviceService } from 'src/app/adminservices/studentservice.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private router:Router,private studentservice:StudentserviceService) { }
  name:any;
  email:any;
  qualification:any;
  dob:any;
  address:any;
  phone:any;
  courseID:any;
  password:any;
  role:any="student";
  gender:any;
  cid=[101,102,789,906];
  quals=["BE/B TECH","M TECH","MCA","Msc computerScience"]
  addstudent(){

    let data={"name":this.name,"email":this.email,"courseID":this.courseID,"qualification":this.qualification,
  "dob":this.dob,"address":this.address,"phone":this.phone,"password":this.password,
  "role":this.role,"gender":this.gender}
    this.studentservice.addstudent(data).subscribe(res=>{
      console.log(res)
      alert('added suucessfully')
      this.router.navigateByUrl('/admin/students')
    })
  }
  ngOnInit(): void {
  }

}
