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


}
