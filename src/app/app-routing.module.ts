import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin-guard';
import { LoggedInGuard } from './guards/logged-in-guard';
import { CategoriesAdminComponent } from './pages/admin-module/admin-components/categories/categories.component';
import { ImagesAdminComponent } from './pages/admin-module/admin-components/images/images.component';
import { NewsAdminComponent } from './pages/admin-module/admin-components/news/news.component';
import { OnSaleAdminComponent } from './pages/admin-module/admin-components/on-sale/on-sale.component';
import { OrdersAdminComponent } from './pages/admin-module/admin-components/orders/orders.component';
import { ProductsAdminComponent } from './pages/admin-module/admin-components/products/products.component';
import { AdminModuleComponent } from './pages/admin-module/admin-module.component';
import { BanListComponent } from './pages/ban-list/ban-list.component';
import { CartComponent } from './pages/cart/cart.component';
import { LoginComponent } from './pages/login/login.component';
import { MulliganComponent } from './pages/mulligan/mulligan.component';
import { NewComponent } from './pages/new/new.component';
import { NewsComponent } from './pages/news/news.component';
import { OnSaleComponent } from './pages/on-sale/on-sale.component';
import { ProductDetailComponent } from './pages/products/poduct-components/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddressesComponent } from './pages/profile/profile-components/addresses/addresses.component';
import { MyOrdersComponent } from './pages/profile/profile-components/my-orders/my-orders.component';
import { UserSettingsComponent } from './pages/profile/profile-components/user-settings/user-settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: 'home', component: BanListComponent, canActivate: [LoggedInGuard]  },
  { path: 'list', component: BanListComponent, canActivate: [LoggedInGuard]  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent, canActivate: [LoggedInGuard]  },
  {
    path: 'profile', component: ProfileComponent,
    children: [
      { path: '', component: AddressesComponent, canActivate: [LoggedInGuard]  },
      { path: 'addresses', component: AddressesComponent, canActivate: [LoggedInGuard]  },
      { path: 'orders', component: MyOrdersComponent, canActivate: [LoggedInGuard]  },
      { path: 'settings', component: UserSettingsComponent, canActivate: [LoggedInGuard]  }
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
      { path: '', component: CategoriesAdminComponent, canActivate: [LoggedInGuard, AdminGuard] },
      { path: 'categories', component: CategoriesAdminComponent, canActivate: [LoggedInGuard, AdminGuard]  },
      { path: 'news', component: NewsAdminComponent, canActivate: [LoggedInGuard, AdminGuard]  },
      { path: 'images', component: ImagesAdminComponent, canActivate: [LoggedInGuard, AdminGuard]  },
      { path: 'on-sale', component: OnSaleAdminComponent, canActivate: [LoggedInGuard, AdminGuard]  },
      { path: 'products', component: ProductsAdminComponent, canActivate: [LoggedInGuard, AdminGuard] },
      { path: 'orders', component: OrdersAdminComponent, canActivate: [LoggedInGuard, AdminGuard]  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
