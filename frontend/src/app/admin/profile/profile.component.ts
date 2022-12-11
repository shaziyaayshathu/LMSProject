import { Component, OnInit } from '@angular/core';
import { ChangepasswordService } from 'src/app/adminservices/changepassword.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private changepass:ChangepasswordService) { }
  ishide="hide";
  otp:any;
  enterpasswordhide="enter-password-hide";
  incorrectotp="showincorrectotp";
  newp:any;
  resetpassword="hide-reset-pass"
  ngOnInit(): void {
  }
  change(){
    this.changepass.send().subscribe((res)=>{
      console.log(res)
    })
    this.ishide="show";  
  }

  submitotp(){
    let data={"otp":this.otp}
  this.changepass.getOtp(data).subscribe((res:any)=>{
    console.log(res)
    if(res=="otp matched"){
       this.enterpasswordhide="show";
    }
    else{
      this.incorrectotp="show";
    }
  })
  }

  changepassword(){
    let data={"newp":this.newp}
  this.changepass.changepass(data).subscribe((res)=>{
    console.log(res)
    if(res=="success"){
      this.resetpassword="show";
    }
  })
  }
}
