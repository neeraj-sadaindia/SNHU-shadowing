import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {
  public username:string = ''
  public mobilenumber:string = ''
  public password:string = ''
  constructor() { }
}
