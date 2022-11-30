import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerserviceService } from 'src/app/adminservices/trainerservice.service';

@Component({
  selector: 'app-addtrainer',
  templateUrl: './addtrainer.component.html',
  styleUrls: ['./addtrainer.component.css']
})
export class AddtrainerComponent implements OnInit {

  constructor(private router:Router,private trainerservice:TrainerserviceService){ }

  ngOnInit(): void {
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
  cid=[101,102,789,906];
  addtrainer(){

    let data={"name":this.name,"email":this.email,"courseID":this.courseID,"qualification":this.qualification,
  "dob":this.dob,"address":this.address,"phone":this.phone,"password":this.password,
  "role":this.role,"gender":this.gender}
    this.trainerservice.addtrainer(data).subscribe(res=>{
      console.log(res)
      alert('added suucessfully')
      this.router.navigateByUrl('/admin/trainers')
    })
  }
}
