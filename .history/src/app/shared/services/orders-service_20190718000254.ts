import { Injectable, OnInit } from "@angular/core";
import { Order } from "../models/order";
import { Product } from "../models/product";
import { ProductService } from "./product-service";
import { formatDate } from "@angular/common";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StoyanovGamesResponse } from '../models/stoyanov-games-response';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService implements OnInit {
  products: Array<Product>;
  orders: Array<Order>;  
  private options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };

  constructor(
    private productService: ProductService,
    private backEnd: HttpClient
  ) {
  }

  ngOnInit(): void {}
  //later it may be changed so that i get them from the DB
  getOrdersByUserId(userId) {
    return this.orders.filter(function(order) {
      return userId === order.userId;
    });
  }

  getOrders() {
    const url = environment._BACKEND + "/orders/get";
    return this.backEnd.get<StoyanovGamesResponse<Order[]>>(url, this.options);
  }

  getConfirmedOrders() {
    const url = environment._BACKEND + "/orders/confirmed";
    return this.backEnd.get<StoyanovGamesResponse<Order[]>>(url, this.options);
  }

  getCompletedOrders() {
    const url = environment._BACKEND + "/orders/completed";
    return this.backEnd.get<StoyanovGamesResponse<Order[]>>(url, this.options);
  }

  getShippedOrders() {
    const url = environment._BACKEND + "/orders/shipped";
    return this.backEnd.get<StoyanovGamesResponse<Order[]>>(url, this.options);
  }

  getUnconfirmedOrders() {
    const url = environment._BACKEND + "/orders/unconfirmed";
    return this.backEnd.get<StoyanovGamesResponse<Order[]>>(url, this.options);
  }

  setOrder(order): Observable<any> {
    let url = environment._BACKEND + "/orders/update";
    console.log(order);
    return this.backEnd.post<any>(url, order, this.options);
  }

  setOrders(orders): Observable<any> {
    let url = environment._BACKEND + "/orders/batch-update";
    console.log(orders);
    return this.backEnd.post<any>(url, orders, this.options);
  }
}
