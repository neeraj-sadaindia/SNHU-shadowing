import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditprofileComponent } from './editprofile/editprofile.component';
//import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetComponent } from './reset/reset.component';
import { PipesComponent } from '../pipes/pipes.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'profile',component:ProfileComponent },
  { path: 'editprofile',component:EditprofileComponent },
  { path: 'reset',component:ResetComponent },
  { path: 'pipes',component:PipesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
