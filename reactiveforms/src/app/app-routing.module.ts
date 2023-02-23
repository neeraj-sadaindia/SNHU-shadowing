import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path : '' , component : LoginComponent, pathMatch:'full'},
  {path : 'dashboard' , loadChildren :() => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[AuthGuard]},
  //{path : '**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
