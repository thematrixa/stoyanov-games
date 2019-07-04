import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { AccordionModule, AlertModule, ButtonsModule, CarouselModule, CollapseModule, BsDropdownModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, RatingModule, SortableModule, TabsModule, TimepickerModule, TypeaheadModule, BsDatepickerModule } from 'ngx-bootstrap';
import { BanListComponent } from './pages/ban-list/ban-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BannedCardPipe } from './shared/pipes/banned-card';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductsComponent } from './pages/products/products.component';
import { SideMenuComponent } from './content/side-menu/side-menu.component';
import { ProductDetailComponent } from './pages/products/poduct-components/product-detail/product-detail.component';
import { ProductTileComponent } from './pages/products/poduct-components/product-tile/product-tile.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { ProductDetailsService } from './shared/services/product-details.service';
import { AdminModuleComponent } from './pages/admin-module/admin-module.component';
import { CategoriesAdminComponent } from './pages/admin-module/admin-components/categories/categories.component';
import { NewsAdminComponent } from './pages/admin-module/admin-components/news/news.component';
import { ImagesAdminComponent } from './pages/admin-module/admin-components/images/images.component';
import { OnSaleAdminComponent } from './pages/admin-module/admin-components/on-sale/on-sale.component';
import { OrdersAdminComponent } from './pages/admin-module/admin-components/orders/orders.component';
import { ProductsAdminComponent } from './pages/admin-module/admin-components/products/products.component';
import { LogsComponent } from './pages/admin-module/admin-components/logs/logs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxTabsModule } from 'igniteui-angular';
import { OrderTableComponent } from './pages/admin-module/admin-components/orders/order-table/order-table.component';
import { AddEditProductComponent } from './pages/admin-module/admin-components/products/add-edit-product/add-edit-product/add-edit-product.component';
import { ProductService } from './shared/services/product-service';
import { CategoriesService } from './shared/services/categories-service';
import { OrderService } from './shared/services/orders-service';
import { MulliganComponent } from './pages/mulligan/mulligan.component';
import { OnSaleComponent } from './pages/on-sale/on-sale.component';
import { NewsComponent } from './pages/news/news.component';
import { NewComponent } from './pages/new/new.component';
import { NewsService } from './shared/services/news-service';
import { AddImageFormControlComponent } from './shared/form-controls/add-image-form-control/add-image-form-control.component';
import { AddressesComponent } from './pages/profile/profile-components/addresses/addresses.component';
import { MyOrdersComponent } from './pages/profile/profile-components/my-orders/my-orders.component';
import { UserSettingsComponent } from './pages/profile/profile-components/user-settings/user-settings.component';
import { UserService } from './shared/services/user-service';
import { FilterMenuComponent } from './pages/filter-menu/filter-menu.component';
import { Ng5SliderModule } from 'ng5-slider';
import {SelectModule} from 'ng2-select';
@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    BanListComponent,
    BannedCardPipe,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SideMenuComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductTileComponent,
    AdminModuleComponent,
    CategoriesAdminComponent,
    NewsAdminComponent,
    ImagesAdminComponent,
    OnSaleAdminComponent,
    OrdersAdminComponent,
    ProductsAdminComponent,
    LogsComponent,
    OrderTableComponent,
    AddEditProductComponent,
    MulliganComponent,
    OnSaleComponent,
    NewsComponent,
    NewComponent,
    AddImageFormControlComponent,
    AddressesComponent,
    MyOrdersComponent,
    UserSettingsComponent,
    FilterMenuComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IgxTabsModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    NgxGalleryModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    SelectModule
  ],
  exports: [
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    BsDropdownModule,
    ModalModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    BsDatepickerModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule,
    BannedCardPipe,
    NgxGalleryModule,
    Ng5SliderModule
  ],
  providers: [ProductDetailsService, ProductService, CategoriesService, OrderService, NewsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
