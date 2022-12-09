import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainerapiService } from '../trainerapi.service';

@Component({
  selector: 'app-evaluate-submission',
  templateUrl: './evaluate-submission.component.html',
  styleUrls: ['./evaluate-submission.component.css']
})
export class EvaluateSubmissionComponent implements OnInit {

  title:any
  course:any
  grades:any=[]
  constructor(private router:Router,private api:TrainerapiService,private routeActivated:ActivatedRoute) { }

  ngOnInit(): void {
    this.routeActivated.queryParams
      .subscribe(params => {
        console.log(params); 
       this.title = params['title']
        this.course=params['course']
       console.log(this.title); 
      }
    );
    this.viewSubmissions();
  }
  viewSubmissions()
  {
    this.api.viewGrades(this.title,this.course).subscribe(res=>{
      this.grades=res
    })

  }

}
