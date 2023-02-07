import { FormControlName,FormGroup } from "@angular/forms";
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
export function usernameValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const username : any = control.value
        var pattern = new RegExp('[a-zA-Z]+[a-zA-Z0-9_]*$')
        const flag=(pattern.test(username))
        console.log(flag)
        return !flag ? {customValidator:true}:null
    }
}