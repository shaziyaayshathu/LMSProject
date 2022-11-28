import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  courses:any=[{"name":"fsd","id":"101","description":"full stack MEAN"}]
  addcourse(){
    this.router.navigateByUrl('/admin/addcourse')
 }
 editCourse(data:any){
  this.router.navigateByUrl('/admin/editcourse')
 }
 deleteCourse(data:any){

 }
}
