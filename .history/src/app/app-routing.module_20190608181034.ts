import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanListComponent } from './pages/ban-list/ban-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/products/poduct-components/product-detail/product-detail.component';
import { AdminModuleComponent } from './pages/admin-module/admin-module.component';
import { CategoriesAdminComponent } from './pages/admin-module/admin-components/categories/categories.component';
import { NewsAdminComponent } from './pages/admin-module/admin-components/news/news.component';
import { ImagesAdminComponent } from './pages/admin-module/admin-components/images/images.component';
import { OnSaleAdminComponent } from './pages/admin-module/admin-components/on-sale/on-sale.component';
import { ProductsAdminComponent } from './pages/admin-module/admin-components/products/products.component';
import { OrdersAdminComponent } from './pages/admin-module/admin-components/orders/orders.component';
import { LogsComponent } from './pages/admin-module/admin-components/logs/logs.component';
import { MulliganComponent } from './pages/mulligan/mulligan.component';
import { OnSaleComponent } from './pages/on-sale/on-sale.component';

const routes: Routes = [
  { path: 'list', component: BanListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'mulligan', component: MulliganComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'sale', component: OnSaleComponent},
  { path: 'admin-module', component: AdminModuleComponent,
  children: [
      { path: 'logs', component: LogsComponent },
      { path: 'categories', component: CategoriesAdminComponent },
      { path: 'news', component: NewsAdminComponent },
      { path: 'images', component: ImagesAdminComponent },
      { path: 'on-sale', component: OnSaleAdminComponent },
      { path: 'products', component: ProductsAdminComponent },
      { path: 'orders', component: OrdersAdminComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
