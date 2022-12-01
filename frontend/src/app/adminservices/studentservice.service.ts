import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private http:HttpClient) { }
  server:string="http://localhost:5200";
  addstudent(data:any){
    return this.http.post<any>(`${this.server}/admin/addstudent`,data)
  }
  getstudent(){
    return this.http.get<any>(`${this.server}/admin/students`)  
  }
  editstudent(id:any){
    return this.http.get<any>(`${this.server}/admin/editstudent/`+id)
   }
   deletestudents(id:any){
     return this.http.delete<any>(`${this.server}/admin/deletestudent/`+id)
   }
   updatestudent(id:any,data:any){
      return this.http.put<any>(`${this.server}/admin/updatestudent/`+id,data)
   }
}
