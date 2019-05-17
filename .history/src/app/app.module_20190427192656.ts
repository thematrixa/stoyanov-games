import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CommonModule } from '@angular/common';
import { AccordionModule, AlertModule,
  ButtonsModule, CarouselModule, CollapseModule,
  BsDropdownModule, 
  ModalModule,
  PaginationModule,
  PopoverModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TypeaheadModule } from 'ngx-bootstrap';
import { BanListComponent } from './pages/ban-list/ban-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    BanListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClient,
    AppRoutingModule,
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
    TypeaheadModule.forRoot()
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
    TypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
