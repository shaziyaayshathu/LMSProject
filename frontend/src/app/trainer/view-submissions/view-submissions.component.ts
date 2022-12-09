import { Component, OnInit } from '@angular/core';
import { TrainerapiService } from '../trainerapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-submissions',
  templateUrl: './view-submissions.component.html',
  styleUrls: ['./view-submissions.component.css']
})
export class ViewSubmissionsComponent implements OnInit {
  course=localStorage.getItem('course')
  submissions:any=[]
  constructor(private api:TrainerapiService,private router:Router) { }

  ngOnInit(): void {
    this.viewSubmissions()
  }

  viewSubmissions()
  {
    this.api.getSubmissions(this.course).subscribe(async res=>{

      this.submissions=await this.codeToMakeItUnique(res)
    });
  }
    codeToMakeItUnique = (dataArr:any)=> {
      return new Promise((resolve, reject) => {
          const UniArr = []
          const map = new Map()
          for (const item of dataArr) {
              if (!map.has(item.title)) {
                  map.set(item.title, true) // set any value to Map
                  UniArr.push(item)
              }
          }
          resolve(UniArr)
      })
  
  }
  viewGrades(title:any)
  {
    this.router.navigate(['/trainer-home/evaluate-submission'], {queryParams:{title:title,course:this.course}})
  }

}
