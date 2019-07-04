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

  filterPrice(values: any){
    debugger;
    this.productList = this.originalProductsList;
    this.productList = this.productList.filter(function(product) {
      return parseFloat(product.price) >= parseFloat(values.value) && parseFloat(product.price) <= parseFloat(values.highValue);
    });

  }
  filterCategories(values: any){
    debugger;
    this.productList = this.originalProductsList;
    this.productList = this.productList.filter(function(product) {
      let exists = false;
      if(values.selectedItems.length==0){
        return parseFloat(product.price) >= parseFloat(values.value) && parseFloat(product.price) <= parseFloat(values.highValue);
      }
      for (let i = 0; i < values.selectedItems.length; i++) {
        if(product.categoryId == values.selectedItems[i].id){
          exists = true
        }
      }
      if(exists){
        return  parseFloat(product.price) >= parseFloat(values.value) && parseFloat(product.price) <= parseFloat(values.highValue);;
      }else{
        return false;
      }
     
    });

  }
}
