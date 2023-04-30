import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { LogInGuard } from './guards/login.guard';
import { LogOutGuard } from './guards/logout.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginSignupComponent,
    canActivate: [LogOutGuard],
  },
  {
    path: 'signup',
    component: LoginSignupComponent,
    canActivate: [LogOutGuard],           
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [LogInGuard]
  },
  {
    path: 'profile/:email',
    component: ProfileComponent,
    canActivate: [LogInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
