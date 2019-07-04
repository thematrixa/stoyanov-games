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
  private value:any = [];
  private _disabledV:string = '0';
  private disabled:boolean = false;
  public multiple:boolean = false;
  private items:Array<any> = [];


  constructor(private productService: ProductService) {
    this.productList = productService.getProducts();
    this.originalProductsList = this.productList;
   }

  ngOnInit() {
  }

  filterPrice(values: any){
    this.productList = this.originalProductsList;
    this.productList = this.productList.filter(function(product) {
      return parseFloat(product.price) >= parseFloat(values.value) && parseFloat(product.price) <= parseFloat(values.highValue);
    });

  }
  filterCategories(values: any){
    console.log(values);
    this.productList = this.originalProductsList;
    this.productList = this.productList.filter(function(product) {
      return parseFloat(product.price) >= parseFloat(values.value) && parseFloat(product.price) <= parseFloat(values.highValue);
    });

  }
}
