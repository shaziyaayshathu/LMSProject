import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { TrainerapiService } from '../trainerapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materials-upload',
  templateUrl: './materials-upload.component.html',
  styleUrls: ['./materials-upload.component.css']
})
export class MaterialsUploadComponent  {

    formdata=new FormData()
    myForm: FormGroup;
    cours=localStorage.getItem('course')
  //     {
  //   title: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   files: new FormControl('', [Validators.required]),
   
  // });

  constructor(private api:TrainerapiService,private fb: FormBuilder,private router:Router) { 
    this.myForm = this.fb.group({
      title: [''],
      files: [''],
      course:[this.cours]
    });
}

get f(){
  return this.myForm.controls;
}
   
onFileChange(event:any) {

  if (event.target.files.length > 0) {
    const files:FileList = event.target .files;
   // const formdata=new FormData();
   
    for(let i=0;i<files.length;i++){
      const element=files[i]
      this.formdata.append('files',element)
    }
  }
}
   
submit(){
 
  const name=this.myForm.controls['title'].value
  console.log(name)
  this.formdata.append('title',this.myForm.controls['title'].value)
  this.formdata.append('course',this.myForm.controls['course'].value)
  this.api.upload(this.formdata).subscribe(res => {
    console.log(res);
    this.router.navigate(['trainer-home/trainer-uploads'])
    alert('Uploaded Successfully.');
  })
 
    
}
}
