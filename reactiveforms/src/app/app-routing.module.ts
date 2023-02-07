import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'menu' , component: MenuComponent},
  {path : 'profile' , component:ProfileComponent},
  {path : 'editprofile' , component:EditprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
