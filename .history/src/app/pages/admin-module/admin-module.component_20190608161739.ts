import { Component, OnInit } from '@angular/core';
import { SideMenuEntry } from 'src/app/shared/models/side-menu-entry';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css']
})
export class AdminModuleComponent implements OnInit {

  sideMenuList: Array<SideMenuEntry> = [];
  productsDropdown: Array<SideMenuEntry> = [];
  constructor() { }

  ngOnInit() {
    this.productsDropdown.push({name: 'Структурни тестета', routerLink: '/structure-decks', dropdown: []});
    this.productsDropdown.push({name: 'Буустери', routerLink: '/boosters', dropdown: []});
    this.productsDropdown.push({name: 'Мега тинс', routerLink: '/mega-tins', dropdown: []});
    this.productsDropdown.push({name: 'Аксесоари', routerLink: '/accesories', dropdown: []});
    this.productsDropdown.push({name: 'Стартер пакети', routerLink: '/starter-packs', dropdown: []});
    this.productsDropdown.push({name: 'Специални издания', routerLink: '/special-editions', dropdown: []});

    this.sideMenuList.push({name: 'Категории', routerLink: 'categories', dropdown: []});
    this.sideMenuList.push({name: 'Новини', routerLink: 'news', dropdown: []});
    this.sideMenuList.push({name: 'Изображения', routerLink: 'images', dropdown: []});
    this.sideMenuList.push({name: 'Промоции', routerLink: 'on-sale', dropdown: []});
    this.sideMenuList.push({name: 'История', routerLink: 'logs', dropdown: []});
    this.sideMenuList.push({name: 'Поръчки', routerLink: 'orders', dropdown: []});
    this.sideMenuList.push({name: 'Продукти', routerLink: 'products', dropdown: []});
  }

}
