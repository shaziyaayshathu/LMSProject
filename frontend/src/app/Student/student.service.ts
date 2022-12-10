import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  apiUrl:string="http://localhost:5200";

  profile(id:any){
    return this.http.post(`${this.apiUrl}/student/profile`,{id})
                                                                      
  }
  courses(){
    return this.http.get(`${this.apiUrl}/student/courses`)
  }

  course(id:any){
    return this.http.post(`${this.apiUrl}/student/course`,{id})
  }

  feedback(data:any){
    return this.http.post(`${this.apiUrl}/student/feedback`,{data})
  }

  courseName(id:any){
    return this.http.post(`${this.apiUrl}/student/course-name`,{id})
  }
  
  exams(id:any){
    return this.http.post(`${this.apiUrl}/student/exams`,{id})
  }

  exam(id:any){
    return this.http.post(`${this.apiUrl}/student/exams/${id}`,id)
  }

  grades(data:any){
    return this.http.post(`${this.apiUrl}/student/grades`,{data},data)
  }

  myCOurse(id:any){
    return this.http.post(`${this.apiUrl}/student/uploads`,{id})
  }
  

}
