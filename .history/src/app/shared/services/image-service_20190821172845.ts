
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

  setImages(images): Observable<any> {
    let url = environment._BACKEND + "/images/set";
    console.log(images);
    return this.backEnd.post<any>(url, images, this.options);
  }

  getImages() {
    const url = environment._BACKEND + "/images/get";
    return this.backEnd.get<StoyanovGamesResponse<Category[]>>(url, this.options);
  }
}