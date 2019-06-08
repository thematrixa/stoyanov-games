import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable()
export class CategoriesService {

  category: Array<Category> = [
    { id: 1, name: 'Structure Decks'},
    { id: 2, name: 'Starter Decks'},
    { id: 3, name: 'Booster packs'},
    { id: 4, name: 'Mega Tins'},
    { id: 5, name: 'Special Editions'},
    { id: 6, name: 'Accesories'},
  ];

  constructor() {
  }

  getProduct(){
    return this.category;
  }
}