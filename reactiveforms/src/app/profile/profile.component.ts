import { Component } from '@angular/core';
import { SharingserviceService } from '../sharingservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private sharing:SharingserviceService,private router: Router){}
  emaildisplay : boolean = false
  photodisplay : boolean = false
  username : string = this.sharing.username
  mobile : string = this.sharing.mobile
  email : string = this.sharing.email
  photo:any = this.sharing.photo
  checkemail():boolean{
    if(this.sharing.email!=''){
      this.emaildisplay=true
    }
    return this.emaildisplay
  }
  checkphoto():boolean{
    if(this.sharing.photo!=null){
      console.log(this.photo)
      this.photodisplay=true
    }
    return this.photodisplay
  }
  onClick(){
    this.router.navigate(['editprofile'])
  }

}
