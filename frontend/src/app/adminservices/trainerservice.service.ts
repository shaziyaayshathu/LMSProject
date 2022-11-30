import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerserviceService {

  constructor(private http:HttpClient) { }
  server:string="http://localhost:5200";
  addtrainer(data:any){
    return this.http.post<any>(`${this.server}/admin/addtrainer`,data)
  }
  gettrainer(){
    return this.http.get<any>(`${this.server}/admin/trainers`)
    
  }
}
