import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  details:any = []
  data:any =[]
  id = localStorage.getItem('id')

  constructor(private student:StudentService) { }

  ngOnInit(): void {

    this.student.profile(this.id).subscribe(res =>{
        this.data = res
        this.data=this.data[0]
        // console.log("from backend",this.data)
    })
    
  
  }  

}
