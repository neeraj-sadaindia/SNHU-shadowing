import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable, Subject,of} from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingserviceService {
  public usernamesub = new BehaviorSubject<string>('');
  _usernamesub:Observable<string>=this.usernamesub
  private mobilesub = new BehaviorSubject<string>('');
  _mobilesub:Observable<string>=this.mobilesub
  public emailsub = new BehaviorSubject<string>('');
  _emailsub:Observable<string>=this.emailsub
  public photosub = new BehaviorSubject<any>('');
  _photosub:Observable<string>=this.photosub

  setdata(username:string,mobile:string){
    this.usernamesub.next(username)
    this.mobilesub.next(mobile)
  }

  setdataeditprofile(email:string,photo:any){
    console.log(email)
    this.emailsub.next(email)
    this.photosub.next(photo)
  }
}
