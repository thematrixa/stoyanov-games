import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductDetailsService {

  product: Product;

  constructor() {
  }

}