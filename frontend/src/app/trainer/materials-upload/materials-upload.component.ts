import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { Observable } from 'rxjs';
import {saveAs} from 'file-saver';
import { FileUploadModule } from "ng2-file-upload";
import { TrainerapiService } from '../trainerapi.service';
const uri = 'http://localhost:5200/file/upload';
@Component({
  selector: 'app-materials-upload',
  templateUrl: './materials-upload.component.html',
  styleUrls: ['./materials-upload.component.css']
})
export class MaterialsUploadComponent  {

  uploader:FileUploader = new FileUploader({url:uri});

    attachmentList:any = [];

  constructor(private api: TrainerapiService) {  
    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
    this.attachmentList.push(JSON.parse(response));
}
}

download(index:any){
var filename = this.attachmentList[index].uploadname;

this.api.downloadFile(filename)
.subscribe(
    data => saveAs(data, filename),
    error => console.error(error)
);
}
}
