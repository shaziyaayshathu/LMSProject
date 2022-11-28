import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any=[{"name":"stud1","email":"s@gmail.com","courseid":"101","qualification":"btech","dob":"06/03/2000","phone":"6777777777"}];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  addstudent(){
    this.router.navigateByUrl('/admin/addstudent')
  }
  editStud(data:any){
    this.router.navigateByUrl('/admin/editstudent')
  }
  deleteStud(data:any){
    
  }
}
