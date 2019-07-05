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
import { MulliganComponent } from './pages/mulligan/mulligan.component';
import { OnSaleComponent } from './pages/on-sale/on-sale.component';
import { NewsComponent } from './pages/news/news.component';
import { NewComponent } from './pages/new/new.component';
import { AddressesComponent } from './pages/profile/profile-components/addresses/addresses.component';
import { MyOrdersComponent } from './pages/profile/profile-components/my-orders/my-orders.component';
import { UserSettingsComponent } from './pages/profile/profile-components/user-settings/user-settings.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: 'list', component: BanListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'profile', component: ProfileComponent,
    children: [
      { path: '', component: AddressesComponent },
      { path: 'addresses', component: AddressesComponent },
      { path: 'orders', component: MyOrdersComponent },
      { path: 'settings', component: UserSettingsComponent }
    ]
  },
  { path: 'mulligan', component: MulliganComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'sale', component: OnSaleComponent },
  { path: 'new', component: NewComponent },
  { path: 'news', component: NewsComponent },
  {
    path: 'admin-module', component: AdminModuleComponent,
    children: [
      { path: '', component: CategoriesAdminComponent },
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
