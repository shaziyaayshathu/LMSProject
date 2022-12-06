import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainerapiService {

  constructor(private http:HttpClient) { }
  submitQuestions(data:any)
  {
    console.log(data)
    return this.http.post('http://localhost:5200/trainer/addexam',data)
  }

  upload(data:any) {
    return this.http.post('http://localhost:5200/trainer/uploadPdf',data )
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:5200/trainer/files');
  }
  downloadFile(file:String){
    var body = {filename:file};

    return this.http.post('http://localhost:5200/file/download',body,{
        responseType : 'blob',
        headers:new HttpHeaders().append('Content-Type','application/json')
    });
}
getMaterials()
{
  return this.http.get('http://localhost:5200/trainer/uploads')
 
}
deleteMaterial(id:any)
{
  return this.http.delete('http://localhost:5200/trainer/uploads/'+id)
}
getFeedback(data:any)
{
  return this.http.get('http://localhost:5200/trainer/feedback/',data)
}
getSubmissions(data:any)
{
  return this.http.get('http://localhost:5200/trainer/submissions/',data)
}
}


