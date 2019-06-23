import { Component, OnInit } from '@angular/core';
import { SideMenuEntry } from 'src/app/shared/models/side-menu-entry';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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

    this.sideMenuList.push({name: 'Моите адреси', routerLink: '/register', dropdown: []});
    this.sideMenuList.push({name: 'Моите поръчки', routerLink: '/list', dropdown: []});
    this.sideMenuList.push({name: 'Настройки', routerLink: '/products', dropdown: []});
  }

}
