import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,FormArray,Validators, AbstractControl,ValidationErrors} from '@angular/forms';
import { SharingserviceService } from '../sharingservice.service';
import { usernameValidator } from '../custom.validator';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  flag:boolean = false
  username!: string;
  constructor(private router: Router,private formBuilder: FormBuilder,private sharing: SharingserviceService,private _auth: AuthenticationService){
    if(this._auth.loggedIn){
      this.router.navigate(['home'])
    }
  }
  registerForm!: FormGroup;
  submitted = false;

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', [usernameValidator(),Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
          mobile:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
          password:['',[Validators.required]],
      });
      localStorage.setItem('currentUser','')
      localStorage.setItem('password','')
      localStorage.setItem('mobileNumber','')
      localStorage.setItem('email','')
      localStorage.setItem('photo','')
    }
  get form(): { [key: string]: AbstractControl; }{
    return this.registerForm.controls;
    }
  login():boolean{
    var user:string
    var pass:string
    var mobilenumber:string
    user=this.registerForm.controls['firstName'].value
    pass=this.registerForm.controls['password'].value
    mobilenumber=this.registerForm.controls['mobile'].value
    if(this._auth.login(user,pass,mobilenumber)){
      this.router.navigate(['home'])
    }
      return false
  }
  onSubmit() {
    if ((this.registerForm.invalid)) {
      return;
    
  }
  this.flag=!this.login()
  this.submitted = true;
}
}
