import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainerserviceService } from 'src/app/adminservices/trainerservice.service';

@Component({
  selector: 'app-showtrainers',
  templateUrl: './showtrainers.component.html',
  styleUrls: ['./showtrainers.component.css']
})
export class ShowtrainersComponent implements OnInit {

  constructor(private trainerservice :TrainerserviceService,
    private url:ActivatedRoute) { }
  courseID:any;
  ngOnInit(): void {
    this.courseID=this.url.snapshot.params['courseID'];
    console.log(this.courseID)
    this.viewtrainer()
  }
  trainers:any;
  viewtrainer(){
    this.trainerservice.gettrainer().subscribe((res)=>{
      this.trainers=res;
      console.log(res)
    })
  }
}
