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
  trainers:any=[];
  addtrainer(){
    this.router.navigateByUrl('/admin/addtrainer')
  }
  edittrainer(data:any){
    this.router.navigateByUrl('/admin/edittrainer/'+data._id)
  }
  deletetrainer(data:any){
    this.trainerservice.deletetrainers(data._id).subscribe((res)=>{
      alert("deleted successfully")
      this.trainers=this.trainers.filter((u:any)=>u!==data)
    })
  }
  viewtrainer(){
    this.trainerservice.gettrainer().subscribe((res)=>{
      this.trainers=res;
      console.log(res)
    })
  }
}
