import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product-service';

@Component({
  selector: 'app-on-sale',
  templateUrl: './on-sale.component.html',
  styleUrls: ['./on-sale.component.css']
})
export class OnSaleAdminComponent implements OnInit {

  editField: string;
  products: Array<Product>;

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
   }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.products[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  sortProducts(fieldName: string) {
    if (fieldName === 'Id') {
      this.products.sort((a, b) => a.id.localeCompare(b.id));
    }
    if (fieldName === 'Name') {
      this.products.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (fieldName === 'Category') {
      this.products.sort((a, b) => a.categoryId.localeCompare(b.categoryId));
    }
    if (fieldName === 'Percent') {
      this.products.sort((a, b) => a.onSalePercent.localeCompare(b.onSalePercent));
    }
  }

}
