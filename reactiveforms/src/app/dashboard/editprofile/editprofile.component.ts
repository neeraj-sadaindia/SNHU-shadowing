import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,FormBuilder,FormArray,Validators, AbstractControl,ValidationErrors, EmailValidator} from '@angular/forms';
import { SharingserviceService } from '../../sharingservice.service'
import { ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  public flag:boolean=false
  public photostring:string=''
  constructor(private router: Router,private formBuilder: FormBuilder,private sharing: SharingserviceService){}
  editprofile!:FormGroup
  ngOnInit():void{
    this.editprofile = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      photo:['',Validators.required],
      interests: this.formBuilder.array([])
    });
  }
  get interests(){
    return this.editprofile.controls["interests"] as FormArray
  }
  addinterest(){
    const int = this.formBuilder.group({
      title : ['',Validators.required],
      level : ['beginner',Validators.required]
    });
    this.interests.push(int)
  }
  get allinterests(){
    return <FormArray>this.editprofile.get('interests')
  }
  get form(): { [key: string]: AbstractControl; }{
    return this.editprofile.controls;
    }
  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.photostring=reader.result as string;
    };
  }

  sendeditprofiledata(){
    this.sharing.setdataeditprofile(this.editprofile.controls['email'].value,this.photostring)
    localStorage.setItem("email",this.editprofile.controls['email'].value)
    this.router.navigate(['/dashboard/profile'])
  }
  checkformarray(){
    if(this.allinterests.controls.length==0){
      return true
    }
    else{
      return true ? this.allinterests.at(0).valueChanges.subscribe(x => console.log(x)) : false
    }
  }
  onSubmit(){
    if ((this.editprofile.invalid)) {
      return;
    }
    //console.log(this.flag)
    console.log(this.allinterests.errors)
    console.log(this.allinterests.controls.length)
    console.log(this.form['interests'].errors)
    this.flag=true
    //console.log(this.flag)
    this.sendeditprofiledata()
  }
}

