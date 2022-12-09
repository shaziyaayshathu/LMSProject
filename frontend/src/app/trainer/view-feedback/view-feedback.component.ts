import { Component, OnInit } from '@angular/core';
import { TrainerapiService } from '../trainerapi.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

// feedbacks:any=[{
//   studentName:'',
//   course:'',
//   feedback:''

// }]
feedbacks:any=[]
course:any=localStorage.getItem('course')
  constructor(private api:TrainerapiService) { }

  ngOnInit(): void {
   this.getFeedback()
  }
  getFeedback()
  {
    console.log(this.course)
    this.api.getFeedback(this.course).subscribe(res=>{
      this.feedbacks=res
      console.log(this.feedbacks)
    })
  }

}
