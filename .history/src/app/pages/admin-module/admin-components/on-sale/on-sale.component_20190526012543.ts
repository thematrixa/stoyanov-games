import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-sale',
  templateUrl: './on-sale.component.html',
  styleUrls: ['./on-sale.component.css']
})
export class OnSaleAdminComponent implements OnInit {
  
  products: Array<any> = [
    // tslint:disable-next-line:max-line-length
    { id: '1', name: 'Structure Deck: Order of the spellcasters'},
    { id: '2', name: 'Structure Deck: Soulburner'},
    { id: '3', name: 'Structure Deck: Rokket'},
    { id: '4', name: 'Structure Deck: SAGA of the Blue-eyes'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
