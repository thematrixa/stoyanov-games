import { Injectable, OnInit } from "@angular/core";
import { Order } from "../models/order";
import { Product } from "../models/product";
import { ProductService } from './product-service';

@Injectable()
export class OrderService implements OnInit{
  products: Array<Product>;
  orders: Array<Order> = [
    {
      id: "4",
      userId: 1,
      name: "Aurelia Vega",
      address: "Mezdra,Bulgaria Stefan karadja 21",
      date: "12.12.2011",
      phone: "0879134481",
      total: "12.51",
      products: this.products,
      showProducts: false,
      status: "Completed"
    },
    {
      id: "2",
      userId: 2,
      name: "Ivelin Gorc",
      address: "Mezdra,Bulgaria Stefan karadja 21",
      date: "12.12.2012",
      phone: "0879133331",
      total: "12.13",
      products: this.products,
      showProducts: false,
      status: "Completed"
    },
    {
      id: "5",
      userId: 2,
      name: "V.Nikolova",
      address: "Mezdra,Bulgaria Stefan karadja 22",
      date: "12.12.2014",
      phone: "0879134481",
      total: "12.11",
      products: this.products,
      showProducts: false,
      status: "Completed"
    },
    {
      id: "1",
      userId: 1,
      name: "Aurelia Vega",
      address: "Mezdra,Bulgaria  21",
      date: "12.12.2018",
      phone: "0879134488",
      total: "12.52",
      products: this.products,
      showProducts: false,
      status: "Completed"
    },
    {
      id: "3",
      userId: 1,
      name: "Aurelia Vega",
      address: "Mezdra,Bulgaria Stefan karadja 21",
      date: "12.12.2011",
      phone: "0879134481",
      total: "12.51",
      products: this.products,
      showProducts: false,
      status: "Completed"
    },
  ];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  getOrders() {
    return this.orders;
  }
//later it may be changed so that i get them from the DB
  getOrdersByUserId(userId) {
    return this.orders.filter(function(order) {
      return userId === order.userId;
    });
  }
}
