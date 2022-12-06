import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-trainer-nav',
  templateUrl: './trainer-nav.component.html',
  styleUrls: ['./trainer-nav.component.css']
})
export class TrainerNavComponent implements OnInit {
  username=localStorage.getItem('name')
  email=localStorage.getItem('email')
  constructor() { }

  ngOnInit(): void {
  }

}
