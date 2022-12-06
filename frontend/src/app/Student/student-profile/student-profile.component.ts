import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  details:any = []

  constructor(private share:ShareService) { }

  ngOnInit(): void {

    this.details = this.share.getDetails()
    console.log("profile", this.details)

  }

}
