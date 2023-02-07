import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,FormArray,Validators, AbstractControl,ValidationErrors} from '@angular/forms';
import { SharingserviceService } from '../sharingservice.service';
import { ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  public flag:boolean=false
  constructor(private router: Router,private formBuilder: FormBuilder,private sharing: SharingserviceService){}
  editprofile!:FormGroup
  ngOnInit():void{
    this.editprofile = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      photo:['',Validators.required]
    });
  }
  get form(): { [key: string]: AbstractControl; }{
    return this.editprofile.controls;
    }
  status(){
    this.flag=true
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.sharing.photo=reader.result as string;
    };
  }


  onSubmit(){
    this.sharing.email=this.editprofile.controls['email'].value
    this.status()
    if ((this.editprofile.invalid)) {
      return;
    }
    this.router.navigate(['profile'])
  }
}

