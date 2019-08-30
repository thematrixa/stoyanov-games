
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoyanovGamesResponse } from '../models/stoyanov-games-response';

@Injectable()
export class ImagesService implements OnInit {

  private options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };

  constructor(private backEnd: HttpClient) {
  }

  ngOnInit(): void {
  }

  setImages(categories): Observable<any> {
    let url = environment._BACKEND + "/categories/update";
    console.log(categories);
    return this.backEnd.post<any>(url, categories, this.options);
  }

  getCategories() {
    const url = environment._BACKEND + "/categories/get";
    return this.backEnd.get<StoyanovGamesResponse<Category[]>>(url, this.options);
  }
}