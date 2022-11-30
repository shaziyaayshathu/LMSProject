import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserviceService } from 'src/app/adminservices/studentservice.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any=[];
  constructor(private router:Router,private studentservice:StudentserviceService) { }

  ngOnInit(): void {
    this.viewstudent();
  }
  addstudent(){
    this.router.navigateByUrl('/admin/addstudent')
  }
  editStud(data:any){
    this.router.navigateByUrl('/admin/editstudent')
  }
  deleteStud(data:any){
    
  }
  viewstudent(){
    this.studentservice.getstudent().subscribe((res)=>{
      this.students=res;
      console.log(res)
    })
  }
}
