import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseserviceService } from 'src/app/adminservices/courseservice.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  constructor(private router:Router,private courseservice:CourseserviceService) { }

  ngOnInit(): void {
    this.viewcourse();
  }
  courses:any=[]
  addcourse(){
    this.router.navigateByUrl('/admin/addcourse')
 }
 editCourse(data:any){
  this.router.navigateByUrl('/admin/editcourse')
 }
 deleteCourse(data:any){

 }
 students(data:any){

 }
 trainers(data:any){

 }
 viewcourse(){
    this.courseservice.getcourses().subscribe((res)=>{
      this.courses=res;
      console.log(res)
    })
 }
}
