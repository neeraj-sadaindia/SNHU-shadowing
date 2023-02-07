// import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
// import { SharingserviceService } from './sharingservice.service';
// export function passwordValidator(): ValidatorFn {
//     private sharing: SharingserviceService
//     return (control:AbstractControl) : ValidationErrors | null => {
//         const password : any = control.value
//         var pattern : any = '[/username/mobile]'
//         var username:string = this.sharing.username
//         console.log(username)
//         var mobile:any = this.sharing.mobile
//         pattern = pattern.replace('username',username)
//         pattern = pattern.replace('mobile',mobile)
//         pattern = new RegExp(pattern)
//         const flag=(pattern.test(password))
//         console.log('inside passwordvalidator')
//         return !flag ? {passwordValidator:true}:null
//     }
// }