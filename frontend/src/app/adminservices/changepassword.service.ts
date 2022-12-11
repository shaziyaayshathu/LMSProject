import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  constructor(private http:HttpClient) { }
  server:String="http://localhost:5200"
  send(){
    return this.http.get<any>(`${this.server}/admin/sendMail`)
  }
  getOtp(otp:any){
    return this.http.post<any>(`${this.server}/admin/getotp`,otp)
  }
  changepass(data:any){
    return this.http.put<any>(`${this.server}/admin/changepass`,data)
  }
  getadmin(){
    return this.http.get<any>(`${this.server}/admin/admindata`)
  }
}
