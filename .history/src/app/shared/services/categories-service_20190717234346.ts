
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoyanovGamesResponse } from '../models/stoyanov-games-response';

@Injectable()
export class CategoriesService implements OnInit {

  private options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };

  categories: Array<Category>;

  constructor(private backEnd: HttpClient) {
  }

  ngOnInit(): void {
  }

  setCategories(categories): Observable<any> {
    let url = environment._BACKEND + "/categories/update";
    console.log(categories);
    return this.backEnd.post<any>(url, categories, this.options);
  }

  getCategories() {
    const url = environment._BACKEND + "/categories/get";
    return this.backEnd.get<StoyanovGamesResponse<Category[]>>(url, this.options);
  }
}