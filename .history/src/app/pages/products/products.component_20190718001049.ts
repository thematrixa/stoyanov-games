import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/models/product";
import { CartService } from "src/app/shared/services/cart-service";
import { ProductService } from "src/app/shared/services/product-service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  productList: Array<Product>;
  originalProductsList: Array<Product>;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.productList = res.response;
      this.originalProductsList = this.productList;
    });
  }

  filterProductsByName(values: any) {
    let name = values.target.value;
    this.productList = this.originalProductsList;
    this.productList = this.productList.filter(function(product) {
      return product.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
  }

  filterProducts(values: any) {
    this.productList = this.originalProductsList;
    this.productList = this.productList.filter(function(product) {
      let exists = false;
      if (values.selectedItems.length == 0) {
        return (
          product.price >= values.prices.value &&
          product.price <= values.prices.highValue
        );
      }
      for (let i = 0; i < values.selectedItems.length; i++) {
        if (product.categoryId == values.selectedItems[i].id) {
          exists = true;
        }
      }
      if (exists) {
        return (
          product.price >= values.prices.value &&
          product.price <= values.prices.highValue
        );
      } else {
        return false;
      }
    });
  }

  // cartUpdated() {
  //   this.cartUpdate.emit(true);
  // }
}
