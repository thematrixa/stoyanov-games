import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  products: Array<any> = [
    // tslint:disable-next-line:max-line-length
    { id: '1', name: 'Structure Deck: Order of the spellcasters', photo1: 'assets/Images/tile-image-mock.jpg', quantity: '12', price: '12.50'},
    { id: '2', name: 'Structure Deck: Soulburner', photo1: 'assets/Images/tile-image-mock.jpg', quantity: '12', price: '12.50'},
    { id: '3', name: 'Structure Deck: Rokket', photo1: 'assets/Images/tile-image-mock.jpg', quantity: '12', price: '12.50'},
    { id: '4', name: 'Structure Deck: SAGA of the Blue-eyes', photo1: 'assets/Images/tile-image-mock.jpg', quantity: '12', price: '12.50'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
