import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Category } from "../models/category";
import { StoyanovGamesResponse } from "../models/stoyanov-games-response";
import { Observable } from 'rxjs';

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

  setCategories(categories):Observable<any> {
    let url = environment._BACKEND + "/categories/update";
    // const data = new FormData();
    // data.append("list", categories);
    console.log(categories);
    return this.backEnd.post<any>(url, categories, {
        headers: new HttpHeaders().set("Content-Type", "application/json")
    });
  }
}
