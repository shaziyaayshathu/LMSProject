import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtrainer',
  templateUrl: './addtrainer.component.html',
  styleUrls: ['./addtrainer.component.css']
})
export class AddtrainerComponent implements OnInit {

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
  addtrainer(){
    this.router.navigateByUrl('/admin/trainers')
  }
}
