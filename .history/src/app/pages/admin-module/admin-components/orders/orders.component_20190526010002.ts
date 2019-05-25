import { Component, OnInit } from '@angular/core';
import { UnconfirmedOrder } from 'src/app/shared/models/unconfirmed-order';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersAdminComponent implements OnInit {
  editField: string;

  products: Array<any> = [
    // tslint:disable-next-line:max-line-length
    { id: '1', name: 'Structure Deck: Order of the spellcasters', photo1: 'assets/Images/tile-image-mock.jpg', quantity: '12', price: '12.50'},
    { id: '2', name: 'Structure Deck: Soulburner', photo1: 'assets/Images/tile-image-mock.jpg', quantity: '12', price: '12.50'},
    { id: '3', name: 'Structure Deck: Rokket', photo1: 'assets/Images/tile-image-mock.jpg', quantity: '12', price: '12.50'},
    { id: '4', name: 'Structure Deck: SAGA of the Blue-eyes', photo1: 'assets/Images/tile-image-mock.jpg', quantity: '12', price: '12.50'},
  ];

  confirmedOrders: Array<UnconfirmedOrder> = [];
  shippedOrders: Array<UnconfirmedOrder> = [];
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

  removeOrder(array: Array<any>, id: any) {
    return array.splice(id, 1)[0];
  }

  confirmOrder(id: any) {
      const confirmedOrder = this.removeOrder(this.unconfirmedOrders, id);
      this.confirmedOrders.push(confirmedOrder);
  }

  shipOrder(id: any) {
    const shippedOrder = this.removeOrder(this.confirmedOrders, id);
    this.shippedOrders.push(shippedOrder);
  }

  deshipOrder(id: any) {
    const shippedOrder = this.removeOrder(this.shippedOrders, id);
    this.confirmedOrders.push(shippedOrder);
  }
  unconfirmOrder(id: any) {
    const confirmedOrder = this.removeOrder(this.confirmedOrders, id);
    this.unconfirmedOrders.push(confirmedOrder);
  }

  toggleProducts(object: any) {
    object.showProducts = !object.showProducts;
  }
}

