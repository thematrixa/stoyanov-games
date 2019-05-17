import { Component, OnInit, Input } from '@angular/core';
import { SideMenuEntry } from 'src/app/shared/models/side-menu-entry';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input() sideMenu: Array<SideMenuEntry> = [];

  constructor() { }

  ngOnInit() {
  }

}
