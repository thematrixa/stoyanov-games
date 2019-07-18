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
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  { path: 'home', component: BanListComponent, canActivate: [AuthGuard]  },
  { path: 'list', component: BanListComponent, canActivate: [AuthGuard]  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]  },
  {
    path: 'profile', component: ProfileComponent,
    children: [
      { path: '', component: AddressesComponent, canActivate: [AuthGuard]  },
      { path: 'addresses', component: AddressesComponent, canActivate: [AuthGuard]  },
      { path: 'orders', component: MyOrdersComponent, canActivate: [AuthGuard]  },
      { path: 'settings', component: UserSettingsComponent, canActivate: [AuthGuard]  }
    ]
  },
  { path: 'mulligan', component: MulliganComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'product-detail', component: ProductDetailComponent},
  { path: 'sale', component: OnSaleComponent},
  { path: 'new', component: NewComponent},
  { path: 'news', component: NewsComponent},
  {
    path: 'admin-module', component: AdminModuleComponent,
    children: [
      { path: '', component: CategoriesAdminComponent, canActivate: [AuthGuard] },
      { path: 'categories', component: CategoriesAdminComponent, canActivate: [AuthGuard]  },
      { path: 'news', component: NewsAdminComponent, canActivate: [AuthGuard]  },
      { path: 'images', component: ImagesAdminComponent, canActivate: [AuthGuard]  },
      { path: 'on-sale', component: OnSaleAdminComponent, canActivate: [AuthGuard]  },
      { path: 'products', component: ProductsAdminComponent, canActivate: [AuthGuard] },
      { path: 'orders', component: OrdersAdminComponent, canActivate: [AuthGuard]  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
