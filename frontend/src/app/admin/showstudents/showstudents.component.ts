import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentserviceService } from 'src/app/adminservices/studentservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-showstudents',
  templateUrl: './showstudents.component.html',
  styleUrls: ['./showstudents.component.css']
})
export class ShowstudentsComponent implements OnInit {

  constructor(private studentservice:StudentserviceService,private url:ActivatedRoute) { }
  courseID:any;
  ngOnInit(): void {
    this.courseID=this.url.snapshot.params['courseID'];
    console.log(this.courseID)
    this.viewstudent()
  }
  students:any;
  viewstudent(){
    this.studentservice.getstudent().subscribe((res)=>{
      this.students=res;
      console.log(res)
    })
  }

}
