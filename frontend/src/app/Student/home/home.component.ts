
import {  Component, ViewChild,  OnInit, AfterViewInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav';
import {ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor(private observer:BreakpointObserver, private cdref:ChangeDetectorRef, private router:Router) { }

  ngOnInit(): void {
    this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='side';
        this.sidenav.close();
        this.cdref.detectChanges();
      }
      else{
        this.sidenav.mode='over';
        this.sidenav.close();
        this.cdref.detectChanges();
      }
    })
  }

  ngAfterViewInit(): void {
    
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigateByUrl('/login')
  }

}