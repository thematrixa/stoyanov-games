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
  constructor(private backEnd: HttpClient) {}
  //i can use async await
  getCategories() {
    const url = environment._BACKEND + "/categories/get";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let options = {
      headers: headers
    };
    return this.backEnd.get<StoyanovGamesResponse<Category[]>>(url, options);
  }

  setCategories(categories): Observable<any> {
    let url = environment._BACKEND + "/categories/update";
    console.log(categories);
    return this.backEnd.post<any>(url, categories, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }
  getNews() {
    const url = environment._BACKEND + "/news/get";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let options = {
      headers: headers
    };
    return this.backEnd.get<StoyanovGamesResponse<News[]>>(url, options);
  }

  setNews(news): Observable<any> {
    let url = environment._BACKEND + "/news/update";
    console.log(news);
    return this.backEnd.post<any>(url, news, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }
  
  setProducts(products): Observable<any> {
    let url = environment._BACKEND + "/products/update";
    console.log(products);
    return this.backEnd.post<any>(url, products, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }
  getProducts() {
    const url = environment._BACKEND + "/products/get";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let options = {
      headers: headers
    };
    return this.backEnd.get<StoyanovGamesResponse<Product[]>>(url, options);
  }

  deleteProduct(product: Product) {
    const url = environment._BACKEND + "/products/delete";
    return this.backEnd.post<any>(url, product, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }

  getOrders() {
    const url = environment._BACKEND + "/orders/get";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let options = {
      headers: headers
    };
    return this.backEnd.get<StoyanovGamesResponse<Order[]>>(url, options);
  }

  setOrder(order): Observable<any> {
    let url = environment._BACKEND + "/orders/update";
    console.log(order);
    return this.backEnd.post<any>(url, order, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }

  setOrders(orders): Observable<any> {
    let url = environment._BACKEND + "/orders/batch-update";
    console.log(orders);
    return this.backEnd.post<any>(url, orders, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }
}
