import { Component, OnInit } from '@angular/core';
import { TrainerapiService } from '../trainerapi.service';

@Component({
  selector: 'app-view-submissions',
  templateUrl: './view-submissions.component.html',
  styleUrls: ['./view-submissions.component.css']
})
export class ViewSubmissionsComponent implements OnInit {
  course:any=localStorage.getItem('course')
  submissions:any=[]
  constructor(private api:TrainerapiService) { }

  ngOnInit(): void {
    this.viewSubmissions()
  }

  viewSubmissions()
  {
    this.api.getSubmissions(this.course).subscribe(res=>{

      this.submissions=res
    })
  }

}
