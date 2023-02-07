import { Component } from '@angular/core';
import { SharingserviceService } from '../sharingservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private sharing:SharingserviceService){}
  tmp:any = history.state.data
  username:string = this.sharing.username
}
