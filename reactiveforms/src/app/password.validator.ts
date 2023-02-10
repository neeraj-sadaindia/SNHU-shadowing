import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { SharingserviceService } from './sharingservice.service';
export function passwordValidator(sharing:SharingserviceService): ValidatorFn {
    return function (control:AbstractControl) : ValidationErrors | null {
        const password : any = control.value
        var username:any = sharing.usernamesub.subscribe()
        console.log(username)
        var mobile:any = sharing._mobilesub.subscribe()
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