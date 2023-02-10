import { Injectable } from '@angular/core';  
import { SharingserviceService } from '../sharingservice.service';
@Injectable({  
  providedIn: 'root'  
})  
export class AuthenticationService {
    constructor(private sharing:SharingserviceService){}
login(username: string, password: string,mobile:string):boolean  {  
    if (username.concat(mobile)==password) {  
      localStorage.setItem('currentUser', username);
      localStorage.setItem('password', password);  
      localStorage.setItem('mobileNumber', mobile);
      this.sharing.setdata(username,mobile)    
      return true;  
    }  
    return false;
  }  
  logout() {  
    localStorage.removeItem('currentUser');  
  }  
  public get loggedIn(): boolean {  
    return (localStorage.getItem('currentUser') !== null);  
  }  
}