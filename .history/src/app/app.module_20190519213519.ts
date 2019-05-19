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
import { AccordionModule, AlertModule, ButtonsModule, CarouselModule, CollapseModule, BsDropdownModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, RatingModule, SortableModule, TabsModule, TimepickerModule, TypeaheadModule } from 'ngx-bootstrap';
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
import { CouponsAdminComponent } from './pages/admin-module/admin-components/coupons/coupons.component';
import { ImagesAdminComponent } from './pages/admin-module/admin-components/images/images.component';
import { OnSaleAdminComponent } from './pages/admin-module/admin-components/on-sale/on-sale.component';
import { OrdersAdminComponent } from './pages/admin-module/admin-components/orders/orders.component';
import { ProductsAdminComponent } from './pages/admin-module/admin-components/products/products.component';
import { LogsComponent } from './pages/admin-module/admin-components/logs/logs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    CouponsAdminComponent,
    ImagesAdminComponent,
    OnSaleAdminComponent,
    OrdersAdminComponent,
    ProductsAdminComponent,
    LogsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IgxTabsModule,
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
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
    BrowserAnimationsModule
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
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule,
    BannedCardPipe,
    NgxGalleryModule
  ],
  providers: [ProductDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
