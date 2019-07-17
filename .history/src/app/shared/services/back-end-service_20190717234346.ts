import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Category } from "../models/category";
import { StoyanovGamesResponse } from "../models/stoyanov-games-response";
import { Observable } from "rxjs";
import { News } from "../models/news";
import { Product } from "../models/product";
import { Order } from "../models/order";

@Injectable()
export class BackEndService {
  private options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };

  constructor(private backEnd: HttpClient) {

  }
  //i can use async await
  getProducts() {
    const url = environment._BACKEND + "/products/get";
    return this.backEnd.get<StoyanovGamesResponse<Product[]>>(url, this.options);
  }
  getNews() {
    const url = environment._BACKEND + "/news/get";
    return this.backEnd.get<StoyanovGamesResponse<News[]>>(url, this.options);
  }
  setNews(news): Observable<any> {
    let url = environment._BACKEND + "/news/update";
    console.log(news);
    return this.backEnd.post<any>(url, news, this.options);
  }
  
  setProducts(products): Observable<any> {
    let url = environment._BACKEND + "/products/batch-update";
    console.log(products);
    return this.backEnd.post<any>(url, products, this.options);
  }

  updateProduct(product): Observable<any> {
    let url = environment._BACKEND + "/products/update";
    console.log(product);
    return this.backEnd.post<any>(url, product, this.options);
  }
  

  deleteProduct(product: Product) {
    const url = environment._BACKEND + "/products/delete";
    return this.backEnd.post<any>(url, product, this.options);
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
