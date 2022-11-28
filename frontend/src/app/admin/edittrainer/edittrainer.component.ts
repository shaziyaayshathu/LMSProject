import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edittrainer',
  templateUrl: './edittrainer.component.html',
  styleUrls: ['./edittrainer.component.css']
})
export class EdittrainerComponent implements OnInit {

  constructor(private router:Router) { }

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
  updatetrainer(){
    this.router.navigateByUrl('/admin/trainers')
  }
  canceledit(){
    this.router.navigateByUrl('/admin/trainers')
  }
}
