import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  ansr = [{
                  // dummy array
  }]

  data: any = {           // for storing qstn , ansr and selected ansr .then push it to an array
    // question: '',
    // answer: '',       
    // selectedAnsr: ''
  }

  dataArray :any   

  constructor(private student: StudentService, private activeId: ActivatedRoute) { }



  ngOnInit(): void {

    let id = this.activeId.snapshot.paramMap.get('id')

    this.student.exam(id).subscribe(res => {
      console.log(res)
      this.response = res
      this.examContent = this.response[0]
      this.title.title = this.examContent.title  // display title
      this.questions = this.examContent.qns      // storing questions array
      this.dataArray = new Array(this.questions.length)
      // for (let i = 0; i < this.questions.length; i++) {

        
      //   this.data = {
      //     question: this.questions[i].question,
      //     answer: this.questions[i].answer,
      //     selectedAnsr: ''
      //   }
      //   this.dataArray.push(this.data)
      // }
      // this.data.question = this.questions
      console.log("dataArray", this.dataArray)

      // console.log(this.questions)
    })

  }

  A(ansr: any) {
    console.log(ansr)
    // console.log(ansr[2].answer3)
  }


}
