import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanListComponent } from './pages/ban-list/ban-list.component';

const routes: Routes = [
  { path: 'list', component: BanListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
