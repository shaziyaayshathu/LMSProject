import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-exampages',
  templateUrl: './student-exampages.component.html',
  styleUrls: ['./student-exampages.component.css']
})
export class StudentExampagesComponent implements OnInit {

  response: any

  title = {
    title: '',
  }
  questions: any
  examContent: any
  hint:any
  score:number = 0


  dataArray :any   

  examData:any ={
    title: '',
    studName: localStorage.getItem('name'),
    marks: 0,
    course: localStorage.getItem('course')
  }

  constructor(private student: StudentService, private activeId: ActivatedRoute, private router:Router) { }



  ngOnInit(): void {

    let id = this.activeId.snapshot.paramMap.get('id')

    this.student.exam(id).subscribe(res => {
      console.log(res)
      this.response = res
      this.examContent = this.response[0]
      this.title.title = this.examContent.title  // display title
      this.questions = this.examContent.qns      // storing questions array
      this.dataArray = new Array(this.questions.length)
  
      console.log("dataArray", this.dataArray)

      // console.log(this.questions)
    })

  }

  A(ansr: any) {
    console.log("selected: ",ansr)
    if(ansr.every((element: null) => element === null)){
      console.log("empty values")
      this.hint = "Please attent atleast one question !"
      return
    };
    for(let i =0; i<ansr.length; i++){

      if(ansr[i] === this.questions[i].answer){
        this.score ++
      } 
    }
    this.examData.marks = this.score
    this.examData.title = this.title.title
    console.log(this.examData)
    alert("Exam submitted successfully")
    this.student.examSubmission(this.examData).subscribe(res =>{
      console.log("response from backend ",res)
    })
    this.router.navigateByUrl('/student-home/exams')


  }
 
}
 