import { Component, OnInit } from '@angular/core';
import { TrainerapiService } from '../trainerapi.service'; 
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-view-uploads',
  templateUrl: './view-uploads.component.html',
  styleUrls: ['./view-uploads.component.css']
})
export class ViewUploadsComponent implements OnInit {
  links:any=[]
  constructor(private api:TrainerapiService) { }

  ngOnInit(): void {
    this.viewUploads();
  }
  viewUploads(){
    this.api.getMaterials().subscribe(res=>{
      console.log(res)
      this.links=res;
      

    })
  }
  deleteMaterial(id:any){
    
    this.api.deleteMaterial(id).subscribe(res=>{
    this.api.getMaterials().subscribe(resp=>{
     this.links=resp
    })
    // this.router.navigate(['viewBooks'])
     })
   }
   downloadMaterial(id:any)
   {

   }

}
