import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { confirmpasswordvalidator } from 'src/app/custom.validator';
import { SharingserviceService } from 'src/app/sharingservice.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit{
  public flag:boolean=false
  constructor(private formBuilder: FormBuilder,private sharing:SharingserviceService,private router:Router){}
  resetpassword!:FormGroup
  ngOnInit(): void {
    this.resetpassword = this.formBuilder.group({
      newpass : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]],
      confirmnewpass : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]]
    },
    {
      validator: confirmpasswordvalidator('newpass', 'confirmnewpass')
    })
  }
  get form(): { [key: string]: AbstractControl; }{
    return this.resetpassword.controls
  }
  onSubmit(){
    if(this.resetpassword.invalid){
      return
    }
    this.flag=true
    this.router.navigate(['/dashboard/home'])
  }
}
