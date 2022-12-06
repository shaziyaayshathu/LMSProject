import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../loginservice/login.service';
import { ShareService } from '../share.service';

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

  private details:any

  constructor(private router:Router, private login_service:LoginService, private share:ShareService) { }
  

  ngOnInit(): void {
  }
  
  login_navigate(data:any){
    
  
    this.login_service.login(data).subscribe((res)=>{
      let userData:any = res
      // console.log('data from backend',userData[1])
      if(userData.status == '0'){
        this.loginStatus = "Account doesn't exist";
      }else if(userData.status == '-1'){
        this.loginStatus = "Invalid credentials";
      }else{

        localStorage.setItem('token',userData[1])

        if(userData[0][0].role == 'student'){
          this.details = userData[0]
          this.share.sendDetails(this.details)
          this.router.navigateByUrl('student-home')
        }
        else if(userData[0][0].role == 'trainer'){
          this.details = userData[0]
          this.share.sendDetails(this.details)
          this.router.navigateByUrl('trainer-home')
        }
        else if(userData[0][0].role == 'admin'){
          this.details = userData[0]
          this.share.sendDetails(this.details)
          this.router.navigateByUrl('admin')
        }
      }

    })
  }

}
