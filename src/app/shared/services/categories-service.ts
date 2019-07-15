
import { Injectable, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { BackEndService } from './back-end-service';

@Injectable()
export class CategoriesService implements OnInit {

  private backEnd: BackEndService;
  categories: Array<Category> ;/*= [
    { id: 1, name: 'Structure Decks'},
    { id: 2, name: 'Starter Decks'},
    { id: 3, name: 'Booster packs'},
    { id: 4, name: 'Mega Tins'},
    { id: 5, name: 'Special Editions'},
    { id: 6, name: 'Accesories'},
  ];
*/
  constructor() {
  }

  ngOnInit(): void {
  }

  getCategories() {
    return this.categories;
  }
}