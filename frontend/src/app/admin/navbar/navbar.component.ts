import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  details:any

  constructor(private share:ShareService) { }

  ngOnInit(): void {
    // this.details = this.share.getDetails()
    // console.log('from nav', this.details[0])
  }

}
