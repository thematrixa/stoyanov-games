import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/models/product";
import { ProductService } from "src/app/shared/services/product-service";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-on-sale",
  templateUrl: "./on-sale.component.html",
  styleUrls: ["./on-sale.component.css"]
})
export class OnSaleComponent implements OnInit {
  productList: Array<Product>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getOnSaleProducts(this.productList).subscribe(
      res => {
        this.productList = res;
      },
      error => {
        console.log(error);
      }
    );
  }
}
