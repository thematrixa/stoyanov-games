import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgxTabsModule } from "igniteui-angular";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { NumberPickerModule } from "ng-number-picker";
import { StickyNavModule } from "ng2-sticky-nav";
import { Ng5SliderModule } from "ng5-slider";
// tslint:disable-next-line:max-line-length
import { AccordionModule, AlertModule, BsDatepickerModule, BsDropdownModule, ButtonsModule, CarouselModule, CollapseModule, ModalModule, PaginationModule, PopoverModule, ProgressbarModule, RatingModule, SortableModule, TabsModule, TimepickerModule, TypeaheadModule } from "ngx-bootstrap";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxGalleryModule } from "ngx-gallery";
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BackgroundComponent } from "./background/background.component";
import { ContentComponent } from "./content/content.component";
import { SideMenuComponent } from "./content/side-menu/side-menu.component";
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { CategoriesAdminComponent } from "./pages/admin-module/admin-components/categories/categories.component";
import { ImagesAdminComponent } from "./pages/admin-module/admin-components/images/images.component";
import { NewsAdminComponent } from "./pages/admin-module/admin-components/news/news.component";
import { OnSaleAdminComponent } from "./pages/admin-module/admin-components/on-sale/on-sale.component";
import { OrderTableComponent } from "./pages/admin-module/admin-components/orders/order-table/order-table.component";
import { OrdersAdminComponent } from "./pages/admin-module/admin-components/orders/orders.component";
import { AddEditProductComponent } from "./pages/admin-module/admin-components/products/add-edit-product/add-edit-product/add-edit-product.component";
import { ProductsAdminComponent } from "./pages/admin-module/admin-components/products/products.component";
import { AdminModuleComponent } from "./pages/admin-module/admin-module.component";
import { BanListComponent } from "./pages/ban-list/ban-list.component";
import { CartComponent } from "./pages/cart/cart.component";
import { FilterMenuComponent } from "./pages/filter-menu/filter-menu.component";
import { LoginComponent } from "./pages/login/login.component";
import { MulliganComponent } from "./pages/mulligan/mulligan.component";
import { NewComponent } from "./pages/new/new.component";
import { NewsComponent } from "./pages/news/news.component";
import { OnSaleComponent } from "./pages/on-sale/on-sale.component";
import { ProductDetailComponent } from "./pages/products/poduct-components/product-detail/product-detail.component";
import { ProductTileComponent } from "./pages/products/poduct-components/product-tile/product-tile.component";
import { ProductsComponent } from "./pages/products/products.component";
import { AddressesComponent } from "./pages/profile/profile-components/addresses/addresses.component";
import { MyOrdersComponent } from "./pages/profile/profile-components/my-orders/my-orders.component";
import { UserSettingsComponent } from "./pages/profile/profile-components/user-settings/user-settings.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { RegisterComponent } from "./pages/register/register.component";
import { AddImageFormControlComponent } from "./shared/form-controls/add-image-form-control/add-image-form-control.component";
import { BannedCardPipe } from "./shared/pipes/banned-card";
import { DateFormatPipe } from './shared/pipes/date-format-pipe';
import { BackEndService } from './shared/services/back-end-service';
import { CartService } from "./shared/services/cart-service";
import { CategoriesService } from "./shared/services/categories-service";
import { NewsService } from "./shared/services/news-service";
import { OrderService } from "./shared/services/orders-service";
import { ProductDetailsService } from "./shared/services/product-details.service";
import { ProductService } from "./shared/services/product-service";
import { UserService } from "./shared/services/user-service";
import { BasicAuthInterceptor } from './basic-auth.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { ChooseAddressFormControlComponent } from './shared/form-controls/choose-address-form-control/choose-address-form-control.component';
import { BarRatingModule } from "ngx-bar-rating";
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
    OrderTableComponent,
    AddEditProductComponent,
    MulliganComponent,
    OnSaleComponent,
    NewsComponent,
    NewComponent,
    AddImageFormControlComponent,
    ChooseAddressFormControlComponent,
    AddressesComponent,
    MyOrdersComponent,
    UserSettingsComponent,
    FilterMenuComponent,
    CartComponent,
    DateFormatPipe,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IgxTabsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
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
    NgMultiSelectDropDownModule.forRoot(),
    NumberPickerModule,
    StickyNavModule,
    BarRatingModule
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
    DateFormatPipe,
    NgxGalleryModule,
    Ng5SliderModule,
    NgMultiSelectDropDownModule
  ],
  providers: [
    ProductDetailsService,
    ProductService,
    CategoriesService,
    OrderService,
    NewsService,
    UserService,
    CartService,
    BackEndService, 
    DateFormatPipe,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
