import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  constructor(private router:Router){ }

  ngOnInit(): void {
  }
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
  updatestudent(){
    this.router.navigateByUrl('/admin/students')
  }
  canceledit(){
    this.router.navigateByUrl('/admin/students')
  }
}
