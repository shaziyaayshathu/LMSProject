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
  this.router.navigateByUrl('/admin/editcourse/'+data._id)
 }
 deleteCourse(data:any){
  this.courseservice.deletecourses(data._id).subscribe((res)=>{
    alert("deleted successfully")
    this.courses=this.courses.filter((u:any)=>u!==data)
  })
 }
 students(data:any){
   this.router.navigateByUrl('/admin/showstudents/'+data.courseID)
 }
 trainers(data:any){
  this.router.navigateByUrl('/admin/showtrainers/'+data.courseID)
 }
 viewcourse(){
    this.courseservice.getcourses().subscribe((res)=>{
      this.courses=res;
      console.log(res)
    })
 }
}
