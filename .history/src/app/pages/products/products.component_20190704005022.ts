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
    return this.productList.filter(function(product) {
      return parseFloat(product.price) >= parseFloat(minPrice);
    });
  }

  filterMaxPrice(maxPrice: any){
    return this.productList.filter(function(product) {
      console.log(parseFloat(product.price) <= parseFloat(maxPrice));
      console.log(maxPrice);
      console.log(product.price);
      console.log(parseFloat(maxPrice));
      console.log(parseFloat(product.price));
      
      return parseFloat(product.price) <= parseFloat(maxPrice);
    });
  }
}
