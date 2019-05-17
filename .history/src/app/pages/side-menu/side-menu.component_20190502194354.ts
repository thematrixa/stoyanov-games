import { Component, OnInit } from '@angular/core';
import { SideMenuEntry } from 'src/app/shared/models/side-menu-entry';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  sideMenuList: Array<SideMenuEntry> = [];

  constructor() { }

  ngOnInit() {
    this.sideMenuList.push({name: 'Промоция', routerLink: '/sale'});
    this.sideMenuList.push({name: 'Мълиган', routerLink: '/mulligan'});
    this.sideMenuList.push({name: 'Профил', routerLink: '/profile'});
    this.sideMenuList.push({name: 'Влез', routerLink: '/login'});
    this.sideMenuList.push({name: 'Промоция', routerLink: '/sale'});
    this.sideMenuList.push({name: 'Промоция', routerLink: '/sale'});
    this.sideMenuList.push({name: 'Промоция', routerLink: '/sale'});
  }

}
