import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private auth:AuthenticationService,private router:Router){}
  logout(){
    this.auth.logout();  
    this.router.navigate(['']);
  }
}
