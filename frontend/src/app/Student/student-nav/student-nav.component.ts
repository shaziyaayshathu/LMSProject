import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.css']
})
export class StudentNavComponent implements OnInit {

  username=localStorage.getItem('name')
  email=localStorage.getItem('email')

  constructor() { }

  ngOnInit(): void {

    

  }

}
