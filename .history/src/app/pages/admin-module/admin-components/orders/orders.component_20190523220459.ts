import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { UnconfirmedOrder } from 'src/app/shared/models/unconfirmed-order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersAdminComponent implements OnInit {
  editField: string;
  confirmedOrders: Array<UnconfirmedOrder> = [];
  categoryList: Array<UnconfirmedOrder> = [
    { id: '1', name: 'Aurelia Vega', address: 'Mezdra,Bulgaria Stefan karadja 21', date: '12.12.2011', phone: '0879134481'},
    { id: '2', name: 'Ivlein Vega', address: 'Mezdra,Bulgaria Stefan karadja 22', date: '12.12.2012', phone: '0879134482'},
    { id: '3', name: 'Martin Vega', address: 'Mezdra,Bulgaria Stefan karadja 23', date: '12.12.2013', phone: '0879134483'},
    { id: '4', name: 'galin Vega', address: 'Mezdra,Bulgaria Stefan karadja 24', date: '12.12.2014', phone: '0879134484'},
    { id: '5', name: 'KOnstaing Vega', address: 'Mezdra,Bulgaria Stefan karadja 2', date: '12.12.2015', phone: '0879134485'},
    { id: '6', name: 'Aurelia MITAKA', address: 'Mezdra,Bulgaria Stefan karadja 26', date: '12.12.2016', phone: '08791344815'},
  ];

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.categoryList[id][property] = editField;
  }

  remove(id: any) {
    return this.categoryList.splice(id, 1);
  }

  confirmOrder(id: any) {
      const confirmedOrder = this.remove(id)[0];
      this.confirmedOrders.push(confirmedOrder);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  shiftUp(id) {
    if (id === 0) {
      return;
    }
    const temp = this.categoryList[id];
    this.categoryList[id] = this.categoryList[id - 1];
    this.categoryList[id - 1] = temp;
  }

  shiftDown(id) {
    if (id === this.categoryList.length - 1) {
      return;
    }
    const temp = this.categoryList[id];
    this.categoryList[id] = this.categoryList[id + 1];
    this.categoryList[id + 1] = temp;
  }
}
