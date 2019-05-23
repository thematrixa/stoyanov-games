import { Component, OnInit } from '@angular/core';
import { UnconfirmedOrder } from 'src/app/shared/models/unconfirmed-order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersAdminComponent implements OnInit {
  editField: string;
  confirmedOrders: Array<UnconfirmedOrder> = [];
  shippedOrders: Array<UnconfirmedOrder> = [];
  unconfirmedOrders: Array<UnconfirmedOrder> = [
    // tslint:disable-next-line:max-line-length
    { id: '1', name: 'Aurelia Vega', address: 'Mezdra,Bulgaria Stefan karadja 21', date: '12.12.2011', phone: '0879134481', total: '12.51'},
    // tslint:disable-next-line:max-line-length
    { id: '2', name: 'Ivlein Vega', address: 'Mezdra,Bulgaria Stefan karadja 22', date: '12.12.2012', phone: '0879134482', total: '12.51'},
    // tslint:disable-next-line:max-line-length
    { id: '3', name: 'Martin Vega', address: 'Mezdra,Bulgaria Stefan karadja 23', date: '12.12.2013', phone: '0879134483', total: '12.51'},
    // tslint:disable-next-line:max-line-length
    { id: '4', name: 'galin Vega', address: 'Mezdra,Bulgaria Stefan karadja 24', date: '12.12.2014', phone: '0879134484', total: '12.51'},
    // tslint:disable-next-line:max-line-length
    { id: '5', name: 'KOnstaing Vega', address: 'Mezdra,Bulgaria Stefan karadja 2', date: '12.12.2015', phone: '0879134485', total: '12.51'},
    // tslint:disable-next-line:max-line-length
    { id: '6', name: 'Aurelia MITAKA', address: 'Mezdra,Bulgaria Stefan karadja 26', date: '12.12.2016', phone: '08791344815', total: '12.51'},
  ];

  constructor() { }

  ngOnInit() {
  }
  remove(array: Array<any>, id: any) {
    return array.splice(id, 1)[0];
  }

  confirmOrder(id: any) {
      const confirmedOrder = this.remove(this.unconfirmedOrders, id);
      this.confirmedOrders.push(confirmedOrder);
  }

  shipOrder(id: any) {
    const shippedOrder = this.remove(this.confirmedOrders, id);
    this.shippedOrders.push(shippedOrder);
  }
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  shiftUp(id) {
    if (id === 0) {
      return;
    }
    const temp = this.unconfirmedOrders[id];
    this.unconfirmedOrders[id] = this.unconfirmedOrders[id - 1];
    this.unconfirmedOrders[id - 1] = temp;
  }

  shiftDown(id) {
    if (id === this.unconfirmedOrders.length - 1) {
      return;
    }
    const temp = this.unconfirmedOrders[id];
    this.unconfirmedOrders[id] = this.unconfirmedOrders[id + 1];
    this.unconfirmedOrders[id + 1] = temp;
  }
}
