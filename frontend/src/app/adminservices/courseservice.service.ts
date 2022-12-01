import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  constructor(private http:HttpClient) { }
  server:string="http://localhost:5200";
  getcourses(){
    return this.http.get<any>(`${this.server}/admin/courses`)
  }
  addcourse(data:any){
    return this.http.post<any>(`${this.server}/admin/addcourse`,data)
  }
  editcourse(id:any){
   return this.http.get<any>(`${this.server}/admin/editcourse/`+id)
  }
  deletecourses(id:any){
    return this.http.delete<any>(`${this.server}/admin/deletecourse/`+id)
  }
  updatecourse(id:any,data:any){
     return this.http.put<any>(`${this.server}/admin/updatecourse/`+id,data)
  }
}
