import { Injectable, OnInit } from "@angular/core";
import { Order } from "../models/order";
import { Product } from "../models/product";
import { ProductService } from './product-service';
import { formatDate } from '@angular/common';

@Injectable()
export class OrderService implements OnInit {
  products: Array<Product>;
  orders: Array<Order>;
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.orders = [
      {
        id: 4,
        userId: 1,
        name: "Aurelia Vega",
        address: "Mezdra,Bulgaria Stefan karadja 21",
        date:  formatDate(new Date(), 'dd.MM.yyyy', 'en'),
        phone: "0879134481",
        total: 12.51,
        products: this.products,
        showProducts: false,
        status: "COMPLETED"
      }
    ];

  }

  ngOnInit(): void {
    
  }
  getOrders() {
    return this.orders;
  }
  //later it may be changed so that i get them from the DB
  getOrdersByUserId(userId) {
    return this.orders.filter(function (order) {
      return userId === order.userId;
    });
  }
}
