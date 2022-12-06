import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-trainer-nav',
  templateUrl: './trainer-nav.component.html',
  styleUrls: ['./trainer-nav.component.css']
})
export class TrainerNavComponent implements OnInit {

  details:any

  constructor(private share:ShareService) { }

  ngOnInit(): void {
    
    this.details = this.share.getDetails()
    console.log('from nav', this.details[0])
  }

}
