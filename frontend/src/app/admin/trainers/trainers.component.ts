import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerserviceService } from 'src/app/adminservices/trainerservice.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  constructor(private router:Router,private trainerservice:TrainerserviceService) { }

  ngOnInit(): void {
    this.viewtrainer();
  }
  trainers:any=[{"name":"stud1","email":"s@gmail.com","courseid":"101","qualification":"btech","dob":"06/03/2000","phone":"6777777777"}];
  addtrainer(){
    this.router.navigateByUrl('/admin/addtrainer')
  }
  edittrainer(data:any){
    this.router.navigateByUrl('/admin/edittrainer')
  }
  deletetrainer(data:any){
  
  }
  viewtrainer(){
    this.trainerservice.gettrainer().subscribe((res)=>{
      this.trainers=res;
    })
  }
}
