import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login_navigate(){
    if(this.email == 'admin'){
      this.router.navigateByUrl('admin')
    }
    else if(this.email == 'student'){
      this.router.navigateByUrl('student-home')
    }
  }

}
