import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../loginservice/login.service';

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
  
  loginStatus:any 

  constructor(private router:Router, private login_service:LoginService) { }
  

  ngOnInit(): void {
  }
  
  login_navigate(data:any){
    
    // console.log(this.data.Email)
    // console.log(this.data.Password)
    // if(this.data.Email == 'admin'){
    //   this.router.navigateByUrl('admin')
    // }
    // else if(this.data.Email == 'student'){
    //   this.router.navigateByUrl('student-home')
    // }
    // else if(this.data.Email == 'trainer'){
    //   this.router.navigateByUrl('trainer-home')
    // }
    this.login_service.login(data).subscribe((res)=>{
      let userData:any = res
      console.log('data from backend',userData[1])
      if(userData.status == '0'){
        this.loginStatus = "Account doesn't exist";
      }else if(userData.status == '-1'){
        this.loginStatus = "Invalid credentials";
      }else{

        localStorage.setItem('token',userData[1])

        if(userData[0][0].role == 'student'){
          this.router.navigateByUrl('student-home')
        }
        else if(userData[0][0].role == 'trainer'){
          this.router.navigateByUrl('trainer-home')
        }
        else if(userData[0][0].role == 'admin'){
          this.router.navigateByUrl('admin')
        }
      }

    })
  }

}
