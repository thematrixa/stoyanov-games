import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product-service';
import { BackEndService } from 'src/app/shared/services/back-end-service';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-on-sale',
  templateUrl: './on-sale.component.html',
  styleUrls: ['./on-sale.component.css']
})
export class OnSaleAdminComponent implements OnInit {

  editField: string;
  products: Array<Product>;
  categories: Array<Category>;
  originalProductsList: Array<Product>;

  constructor(private productService: ProductService,
    private backEndService: BackEndService,
    private toastr: ToastrService,) {
   // this.products = productService.getProducts();
   // this.originalProductsList = this.products;
   }

  ngOnInit() {
    let onSale = this.backEndService.getProducts();
    let categories = this.backEndService.getCategories();
    forkJoin(onSale, categories).subscribe(results => {
      this.products = results[0].response;
      this.categories = results[1].response;
      this.originalProductsList = this.products;
    });
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
      this.products.sort((a, b) => a.id - b.id);
    }
    if (fieldName === 'Name') {
      this.products.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (fieldName === 'Category') {
      this.products.sort((a, b) => a.categoryId - b.categoryId);
    }
    if (fieldName === 'Percent') {
      this.products.sort((a, b) => a.onSalePercent - b.onSalePercent);
    }
  }

  filterProductsByName(values: any){
    let name = values.target.value;
    this.products = this.originalProductsList;
    this.products = this.products.filter(function(product) {
      return product.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
  }
  saveOnSale() {
    this.backEndService.setProducts(this.products).subscribe(
      (res) => {
        this.toastr.success('Great', 'Upload successfull!');},
      (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.error('Error', 'Upload failed.Check logs or call administrator!');
      }
    );
  }
}
