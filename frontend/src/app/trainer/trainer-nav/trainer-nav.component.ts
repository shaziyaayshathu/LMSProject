import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-nav',
  templateUrl: './trainer-nav.component.html',
  styleUrls: ['./trainer-nav.component.css']
})
export class TrainerNavComponent implements OnInit {
  username:any
  email:any
  constructor() { }

  ngOnInit(): void {
    this.username=localStorage.getItem('name')
    this.email=localStorage.getItem('email')
  }

}
