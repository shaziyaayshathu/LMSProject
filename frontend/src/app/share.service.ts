import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  details:any

  constructor() { }


  sendDetails(data:any){
    this.details = data
  }

  getDetails(){
    return this.details
  }
}
