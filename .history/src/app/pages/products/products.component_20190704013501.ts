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
  originalProductsList: Array<Product>;

  constructor(private productService: ProductService) {
    this.productList = productService.getProducts();
    this.originalProductsList = this.productList;
   }

  ngOnInit() {
  }

  filterMinPrice(minPrice: any){
    
    console.log("Original");
    console.log(this.originalProductsList);
    this.productList = this.originalProductsList;

    console.log("Entering with..");
    console.log(this.productList);
    this.productList = this.productList.filter(function(product) {
      return parseFloat(product.price) >= parseFloat(minPrice);
    });
    
    console.log("Transformed");
    console.log(this.productList);
  }

  filterMaxPrice(maxPrice: any){
    this.productList = this.originalProductsList;
    this.productList = this.productList.filter(function(product) {
      console.log(parseFloat(product.price) <= parseFloat(maxPrice));
      return parseFloat(product.price) <= parseFloat(maxPrice);
    });
  }
}
