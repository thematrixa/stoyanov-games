import { Injectable } from "@angular/core";
import { Order } from "../models/order";
import { Product } from "../models/product";
import { ProductService } from './product-service';

@Injectable()
export class OrderService {
  products: Array<Product>;
  orders: Array<Order> = [
    {
      id: "1",
      name: "Aurelia Vega",
      address: "Mezdra,Bulgaria Stefan karadja 21",
      date: "12.12.2011",
      phone: "0879134481",
      total: "12.51",
      products: this.products,
      showProducts: false
    }
  ];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  getOrders() {
    return this.orders;
  }
}
