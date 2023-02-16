import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
// import { HomeComponent } from './home/home.component';
// import { EditprofileComponent } from './editprofile/editprofile.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { MenuComponent } from './menu/menu.component';
// import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  // {path : 'home' , component: HomeComponent,canActivate:[AuthGuard]},
  {path : 'dashboard' , loadChildren :() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  // {
  //   path : 'dashboard',
  //   component:DashboardComponent,
  //   canActivate:[AuthGuard],loadChildren: () => import('./dashboard/dashboard.module').then((mod) => mod.DashboardModule)
  // },
  // {path : 'login' , component:LoginComponent,canActivate:[AuthGuard]},
  // {path : 'menu' , component: MenuComponent,canActivate:[AuthGuard]},
  // {path : 'profile' , component:ProfileComponent,canActivate:[AuthGuard]},
  // {path : 'editprofile' , component:EditprofileComponent,canActivate:[AuthGuard]},
  // {path : '**' , component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
