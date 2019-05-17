import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanListComponent } from './pages/ban-list/ban-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: 'list', component: BanListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
