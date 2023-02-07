import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,FormArray,Validators, AbstractControl,ValidationErrors} from '@angular/forms';
import { SharingserviceService } from '../sharingservice.service';
import { usernameValidator } from '../custom.validator';
//import { passwordValidator } from '../password.validator';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  flag:boolean = false
  constructor(private router: Router,private formBuilder: FormBuilder,private sharing: SharingserviceService){}
  registerForm!: FormGroup;
  submitted = false;

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', [usernameValidator(),Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
          mobile:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
          password:['',[Validators.required]],
      });
    }
  get form(): { [key: string]: AbstractControl; }{
    return this.registerForm.controls;
    }
  onSubmit() {
    this.sharing.username=this.registerForm.controls['firstName'].value
    this.sharing.mobile=this.registerForm.controls['mobile'].value
    this.checkpass()
    this.flag=true
    this.submitted = true;
    if ((this.registerForm.invalid)) {
        return;
      
    }
}
  checkpass():void{
    var username:string = this.registerForm.controls['firstName'].value
    var mobile:string = this.registerForm.controls['mobile'].value
    var password:string = this.registerForm.controls['password'].value
    if(username.concat(mobile)==password){
      this.router.navigate(['home'],{state:{data:username}})
    }
    else{
      //window.alert('Invalid password')
    }
  }
}
