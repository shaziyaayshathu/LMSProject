import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerapiService {

  constructor(private http:HttpClient) { }
  submitQuestions(data:any)
  {
    return this.http.post('http://localhost:5200/trainer/addexam',data)
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:5200/trainer/upload', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
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
}


