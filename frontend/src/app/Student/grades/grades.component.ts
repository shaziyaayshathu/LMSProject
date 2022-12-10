import { Component, OnInit} from '@angular/core';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css'],
  
 
  
})


export class GradesComponent implements OnInit {

data={
  "id":localStorage.getItem('course'),
  "name":localStorage.getItem('name')
}
courseName:any =[]

response:any
  constructor(private student:StudentService) { 
    
  }
 
  ngOnInit(): void {

    this.student.courseName(this.data.id).subscribe(res =>{
      console.log(res)
      this.courseName = res 
      this.courseName = this.courseName[0]
     })

    console.log(this.data)
   this.student.grades(this.data).subscribe(res=>{
    this.response = res
    console.log(this.response)
   })

   

  } 
  
}
