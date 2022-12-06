import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms' ;
import { TrainerapiService } from '../trainerapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-up-exams',
  templateUrl: './set-up-exams.component.html',
  styleUrls: ['./set-up-exams.component.css']
})
export class SetUpExamsComponent  {
  
  name = 'Angular';  
    
  examForm: FormGroup;  
     
  constructor(private fb:FormBuilder,private api:TrainerapiService,private router:Router) {  
     
    this.examForm = this.fb.group({  
      title: '',  
      qns: this.fb.array([]) ,  
    });  
  }  
    
  quantities() : FormArray {  
    return this.examForm.get("qns") as FormArray  
  }  
     
  newQuantity(): FormGroup {  
    return this.fb.group({  
      question: '',  
      option1: '', 
      option2: '', 
      option3: '',
      option4: '',
      answer:''
    })  
  }  
     
  addQuantity() {  
    this.quantities().push(this.newQuantity());  
  }  
     
  removeQuantity(i:number) {  
    this.quantities().removeAt(i);  
  }  
     
  onSubmit() { 
    console.log(this.examForm.value); 
    this.api.submitQuestions(this.examForm.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['trainer-home/hometrainer'])
      alert('Successfully created the exam')
      
    },
    (err) => {
      
      alert(err.error.msg)
    })
      

  }
}
