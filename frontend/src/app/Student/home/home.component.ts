
import {  Component, ViewChild,  OnInit, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

 

  constructor( private router:Router) { }

  ngOnInit(): void {
    

}

  ngAfterViewInit(): void {
    
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    localStorage.removeItem('course')
    localStorage.removeItem('id')
    this.router.navigateByUrl('/login')
  }

 
    


}