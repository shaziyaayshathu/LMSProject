import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.css']
})
export class StudentNavComponent implements OnInit {

  details:any
  constructor(private share:ShareService) { }

  ngOnInit(): void {

    this.details = this.share.getDetails()
    // console.log('from nav', this.details[0])

  }

}
