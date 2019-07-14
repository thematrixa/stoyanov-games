import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Category } from "../models/category";
import { StoyanovGamesResponse } from "../models/stoyanov-games-response";
import { Observable } from "rxjs";
import { News } from "../models/news";
import { Product } from '../models/product';

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
    // const data = new FormData();
    // data.append("list", categories);
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
    // const data = new FormData();
    // data.append("list", categories);
    console.log(news);
    return this.backEnd.post<any>(url, news, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }
  getOnSales() {
    const url = environment._BACKEND + "/news/get";
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    let options = {
      headers: headers
    };
    return this.backEnd.get<StoyanovGamesResponse<Product[]>>(url, options);
  }

  setOnSales(onSales): Observable<any> {
    let url = environment._BACKEND + "/news/update";
    // const data = new FormData();
    // data.append("list", categories);
    console.log(onSales);
    return this.backEnd.post<any>(url, onSales, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }
}
