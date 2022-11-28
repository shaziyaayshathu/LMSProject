import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private router:Router) { }
  name:any;
  email:any;
  qualification:any;
  dob:any;
  address:any;
  phone:any;
  course:any;
  password:any;
  role:any;
  cid=[101,102,789,906];
  addstudent(){
    this.router.navigateByUrl('/admin/students')
  }
  ngOnInit(): void {
  }

}
