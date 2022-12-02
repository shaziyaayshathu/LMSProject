import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  server:string="http://localhost:5200";   //server address

  login(data:any){
    return this.http.post(`${this.server}/login`,data)
  }


}