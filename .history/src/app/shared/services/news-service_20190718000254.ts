import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { News } from "../models/news";
import { formatDate } from "@angular/common";
import { environment } from "src/environments/environment";
import { StoyanovGamesResponse } from "../models/stoyanov-games-response";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class NewsService {
  news: Array<News>;
  private options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };

  constructor(private backEnd: HttpClient) {}

  getNews() {
    const url = environment._BACKEND + "/news/get";
    return this.backEnd.get<StoyanovGamesResponse<News[]>>(url, this.options);
  }
  setNews(news): Observable<any> {
    let url = environment._BACKEND + "/news/update";
    console.log(news);
    return this.backEnd.post<any>(url, news, this.options);
  }
}
