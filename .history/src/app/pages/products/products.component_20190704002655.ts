import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product-service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: Array<Product>;

  constructor(private productService: ProductService) {
    this.productList = productService.getProducts();
   }

  ngOnInit() {
  }

  filterMinPrice(minPrice: any){

  }

  filterMaxPrice(maxPrice: any){
    
  }
}
