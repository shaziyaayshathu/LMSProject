import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-exampages',
  templateUrl: './student-exampages.component.html',
  styleUrls: ['./student-exampages.component.css']
})
export class StudentExampagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  exams = [
    {
      question : "Sample question ?",
      options:
        {A : "Option A",
         B : "Option B",
         C : "Option C",
         D : "Option D"
        }
      
    },
    {
      question : "Sample question?",
      options:
        {A : "Option A",
         B : "Option B",
         C : "Option C",
         D : "Option D"
        }
      
    },
    {
      question : "Sample question 3?",
      options:
        {A : "Option A",
         B : "Option B",
         C : "Option C",
         D : "Option D"
        }
      
    },
    {
      question : "Sample question 4?",
      options:
        {A : "Option A",
         B : "Option B",
         C : "Option C",
         D : "Option D"
        }
      
    },
    {
      question : "Sample question 5?",
      options:
        {A : "Option A",
         B : "Option B",
         C : "Option C",
         D : "Option D"
        }
      
    }
  ]
}
