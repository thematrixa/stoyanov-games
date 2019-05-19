import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanListComponent } from './pages/ban-list/ban-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/products/poduct-components/product-detail/product-detail.component';
import { AdminModuleComponent } from './pages/admin-module/admin-module.component';
import { CategoriesComponent } from './pages/admin-module/admin-components/categories/categories.component';
import { NewsComponent } from './pages/admin-module/admin-components/news/news.component';
import { ImagesComponent } from './pages/admin-module/admin-components/images/images.component';
import { OnSaleComponent } from './pages/admin-module/admin-components/on-sale/on-sale.component';
import { ProductsAdminComponent } from './pages/admin-module/admin-components/products/products.component';

const routes: Routes = [
  { path: 'list', component: BanListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'admin-module', component: AdminModuleComponent,
  children: [
      { path: 'categories', component: CategoriesComponent },
      { path: 'news', component: NewsComponent },
      { path: 'images', component: ImagesComponent },
      { path: 'on-sale', component: OnSaleComponent },
      { path: 'products', component: ProductsAdminComponent },
      { path: 'news', component: NewsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
