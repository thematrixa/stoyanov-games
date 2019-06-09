import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product-service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  productList: Array<Product>;

  constructor(private productService: ProductService) {
    this.productList = productService.getOnSaleProducts();
   }

  ngOnInit() {
  }
}
