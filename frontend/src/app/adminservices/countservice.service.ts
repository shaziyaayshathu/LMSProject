import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountserviceService {

  constructor(private http:HttpClient) { }
  counts={"noOfStudents":0,"noOfTrainers":0,"noOfCourses":0}
  server:string="http://localhost:5200";
  getCourseCount(){
    return this.http.get(`${this.server}/admin/countcourse`)
 }
 getStudentCount(){
  return this.http.get(`${this.server}/admin/countstudent`)
}
getTrainerCount(){
  return this.http.get(`${this.server}/admin/counttrainer`)
}
}