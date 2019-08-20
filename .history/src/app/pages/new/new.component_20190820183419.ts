import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/models/product";
import { ProductService } from "src/app/shared/services/product-service";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  productList: Array<Product>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    let products = this.productService.getAllProducts();
    forkJoin(products).subscribe(results => {
      console.log(results);
      this.productList = results[0].response;
      this.productList = this.productService.getNewProducts(this.productList);
    });
  }
}
