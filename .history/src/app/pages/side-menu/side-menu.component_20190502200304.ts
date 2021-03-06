import { Component, OnInit } from '@angular/core';
import { SideMenuEntry } from 'src/app/shared/models/side-menu-entry';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  sideMenuList: Array<SideMenuEntry> = [];
  productsDropdown: Array<SideMenuEntry> = [];

  constructor() { }

  ngOnInit() {
    this.productsDropdown.push({name: 'Структурни тестета', routerLink: '/structure-decks', dropdown: []});
    this.productsDropdown.push({name: 'Буустери', routerLink: '/boosters', dropdown: []});
    this.productsDropdown.push({name: 'Мега тинс', routerLink: '/mega-tins', dropdown: []});
    this.productsDropdown.push({name: 'Аксесоари', routerLink: '/accesories', dropdown: []});
    this.productsDropdown.push({name: 'Стартер пакети', routerLink: '/starter-packs', dropdown: []});
    this.productsDropdown.push({name: 'Единични бройки', routerLink: '/singles', dropdown: []});
    this.productsDropdown.push({name: 'Специални издания', routerLink: '/special-editions', dropdown: []});

    this.sideMenuList.push({name: 'Промоция', routerLink: '/sale', dropdown: []});
    this.sideMenuList.push({name: 'Мълиган', routerLink: '/mulligan', dropdown: []});
    this.sideMenuList.push({name: 'Профил', routerLink: '/profile', dropdown: []});
    this.sideMenuList.push({name: 'Влез', routerLink: '/login', dropdown: []});
    this.sideMenuList.push({name: 'Излез', routerLink: '/logout', dropdown: []});
    this.sideMenuList.push({name: 'Регистрация', routerLink: '/register', dropdown: []});
    this.sideMenuList.push({name: 'Бан лист', routerLink: '/list', dropdown: []});
    this.sideMenuList.push({name: 'Продукти', routerLink: '/products', dropdown: this.productsDropdown});
  }

}
