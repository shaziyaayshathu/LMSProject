import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/loginservice/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  data={
    Email:''
  }
  
  statusMsg:any 
  Status:any
  info:any 
  loginLink:any

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }
  forgotPassword_navigate(data:any){
    // console.log(data)
    this.login.passwordRecovery(data).subscribe(res=>{
      // console.log(res)
      this.Status = res
      this.Status = this.Status.status
      console.log(this.Status)
      if(this.Status == 0){
        this.statusMsg = "No account found with this email !"
      }else{
        this.info = "We have sent the informations to your email. Kindly check."
        this.loginLink = "Click here for Login page !"
      }
    })
  }

}
