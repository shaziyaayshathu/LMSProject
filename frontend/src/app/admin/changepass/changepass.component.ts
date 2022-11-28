import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
changepass(){
  
  this.router.navigateByUrl('/admin/home')
}
}
