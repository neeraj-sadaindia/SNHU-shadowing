import { FormControlName,FormGroup } from "@angular/forms";
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { SharingserviceService } from "./sharingservice.service";
export function usernameValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const username : any = control.value
        var pattern = new RegExp('[a-zA-Z]+[a-zA-Z0-9_]*$')
        const flag=(pattern.test(username))
        return !flag ? {customValidator:true}:null
    }
}
export function passwordValidator(sharing:SharingserviceService): ValidatorFn {
    return function (control:AbstractControl) : ValidationErrors | null {
        const password : any = control.value
        var username:any 
        sharing.usernamesub.subscribe(d=>{
            username = d
        })
        console.log(username)
        var mobile:any 
        sharing._mobilesub.subscribe(d=>{
            mobile = d
        })
        console.log(mobile)
        const pattern:string = username+mobile
        if(pattern==password){
            return {passwordValidator:true}
        }
        else{
            return null
        }
        //return !flag ? {passwordValidator:true}:null
    }
}