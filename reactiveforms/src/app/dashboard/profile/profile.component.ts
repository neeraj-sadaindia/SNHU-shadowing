import { Component, OnInit } from '@angular/core';
import { SharingserviceService } from '../../sharingservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private sharing:SharingserviceService,private router: Router){}
  emaildisplay : boolean = false
  photodisplay : boolean = false
  username !: string 
  mobile !: string 
  email !: string 
  photo!:any 

  ngOnInit(): void {
    this.sharing._emailsub.subscribe(d=>{
      this.email = d
    })
    this.sharing._photosub.subscribe(d=>{
        this.photo = d
    })
    this.sharing._usernamesub.subscribe(d=>{
      this.username = d
    })
    this.sharing._mobilesub.subscribe(d=>{
      this.mobile = d
    })
  }

  checkemail():boolean{
    if(this.email!=''){
      this.emaildisplay=true
    }
    return this.emaildisplay
  }
  checkphoto():boolean{
    if(this.photo!=''){
      //console.log(this.photo)
      this.photodisplay=true
    }
    return this.photodisplay
  }
  onClick(){
    this.router.navigate(['/dashboard/editprofile'])
  }

}
