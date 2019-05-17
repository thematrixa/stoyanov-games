import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductDetailsService {

  product: Product;

  constructor() {
  }

  setProduct(product: Product){
      this.product = product;
  }
}