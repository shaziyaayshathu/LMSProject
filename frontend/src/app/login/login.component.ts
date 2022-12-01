import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data={
    Email:'',
    Password:''
  }
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  login_navigate(){
    console.log(this.data.Email)
    console.log(this.data.Password)
    if(this.data.Email == 'admin'){
      this.router.navigateByUrl('admin')
    }
    else if(this.data.Email == 'student'){
      this.router.navigateByUrl('student-home')
    }
    else if(this.data.Email == 'trainer'){
      this.router.navigateByUrl('trainer-home')
    }
  }

}
