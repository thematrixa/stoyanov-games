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
  unconfirmedOrders: Array<any> = [
    // tslint:disable-next-line:max-line-length
    { id: '1', name: 'Aurelia Vega', address: 'Mezdra,Bulgaria Stefan karadja 21', date: '12.12.2011', phone: '0879134481', total: '12.51', products: this.products, showProducts: false},
    // tslint:disable-next-line:max-line-length
    { id: '2', name: 'Ivlein Vega', address: 'Mezdra,Bulgaria Stefan karadja 22', date: '12.12.2012', phone: '0879134482', total: '12.51', products: this.products, showProducts: false},
    // tslint:disable-next-line:max-line-length
    { id: '3', name: 'Martin Vega', address: 'Mezdra,Bulgaria Stefan karadja 23', date: '12.12.2013', phone: '0879134483', total: '12.51', products: this.products, showProducts: false},
    // tslint:disable-next-line:max-line-length
    { id: '4', name: 'galin Vega', address: 'Mezdra,Bulgaria Stefan karadja 24', date: '12.12.2014', phone: '0879134484', total: '12.51', products: this.products, showProducts: false},
    // tslint:disable-next-line:max-line-length
    { id: '5', name: 'KOnstaing Vega', address: 'Mezdra,Bulgaria Stefan karadja 2', date: '12.12.2015', phone: '0879134485', total: '12.51', products: this.products, showProducts: false},
    // tslint:disable-next-line:max-line-length
    { id: '6', name: 'Aurelia MITAKA', address: 'Mezdra,Bulgaria Stefan karadja 26', date: '12.12.2016', phone: '08791344815', total: '12.51', products: this.products, showProducts: false},
  ];

  constructor() { }

  ngOnInit() {
  }

}
