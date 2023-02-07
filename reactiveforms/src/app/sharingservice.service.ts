import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingserviceService {
  public username:string=''
  public mobile:string=''
  public email:string=''
  public photo:any

}
