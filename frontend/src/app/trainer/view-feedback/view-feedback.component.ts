import { Component, OnInit } from '@angular/core';
import { TrainerapiService } from '../trainerapi.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

feedbacks:any=[{
  name:'',
  course:'',
  feedback:''

}
]
courseid:any=localStorage.getItem('course')
  constructor(private api:TrainerapiService) { }

  ngOnInit(): void {
   this. getFeedback()
  }
  getFeedback()
  {
    this.api.getFeedback(this.courseid).subscribe(res=>{
      this.feedbacks=res
    })
  }

}
