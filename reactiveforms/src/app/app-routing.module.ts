import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'home' , component : HomeComponent,canActivate:[AuthGuard]},
  {path : 'menu' , component: MenuComponent,canActivate:[AuthGuard]},
  {path : 'profile' , component:ProfileComponent,canActivate:[AuthGuard]},
  {path : 'editprofile' , component:EditprofileComponent,canActivate:[AuthGuard]},
  {path : '**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
