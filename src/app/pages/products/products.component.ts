import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product-service';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart-service';
import { PageChangedEvent } from 'ngx-bootstrap';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  productList: Array<Product>;
  originalProductsList: Array<Product>;
  constructor(
    private productService: ProductService,
    private cartService: CartService) {
    this.productList = productService.getProducts();
    this.originalProductsList = this.productList;
  }

  ngOnInit() {
  }

  filterProductsByName(values: any) {
    let name = values.target.value;
    this.productList = this.originalProductsList;
    this.productList = this.productList.filter(function (product) {
      return product.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
  }

  filterProducts(values: any) {
    this.productList = this.originalProductsList;
    this.productList = this.productList.filter(function (product) {
      let exists = false;
      if (values.selectedItems.length == 0) {
        return parseFloat(product.price) >= parseFloat(values.prices.value) && parseFloat(product.price) <= parseFloat(values.prices.highValue);
      }
      for (let i = 0; i < values.selectedItems.length; i++) {
        if (product.categoryId == values.selectedItems[i].id) {
          exists = true
        }
      }
      if (exists) {
        return parseFloat(product.price) >= parseFloat(values.prices.value) && parseFloat(product.price) <= parseFloat(values.prices.highValue);;
      } else {
        return false;
      }

    });

  }

  // cartUpdated() {
  //   this.cartUpdate.emit(true);
  // }
}
