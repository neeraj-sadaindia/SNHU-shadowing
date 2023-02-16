import { Component, OnInit } from '@angular/core';
import { SharingserviceService } from '../../sharingservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg!: string;
  constructor(private sharing:SharingserviceService){}
  ngOnInit(): void {
    this.sharing._usernamesub.subscribe(d =>{
      this.msg=d;
      console.log(this.msg);
    })
  }
}
