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
  constructor(private student:StudentService) { 
    
  }
 
  ngOnInit(): void {
    console.log(this.data)
   this.student.grades(this.data).subscribe(res=>{
    console.log(res)
   })

  }
  
}
