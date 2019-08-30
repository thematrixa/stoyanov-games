import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';
import { CategoriesService } from 'src/app/shared/services/categories-service';
import { ProductService } from 'src/app/shared/services/product-service';
import { forkJoin } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { DateFormatPipe } from 'src/app/shared/pipes/date-format-pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsAdminComponent implements OnInit {
  elements: any = [];
  newProduct = new Product();
  selectedProduct: Product;
  isSelectedProduct = false;
  editField: string;
  productList: Array<Product>;
  originalProductsList: Array<Product>;
  submitted = false;
  categories: Array<Category>;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private productService: ProductService,
    private toastr: ToastrService,
    private dateFormatter:DateFormatPipe) {
      //this.productList = this.productService.getProducts();
      //this.categories = this.categoriesService.getCategories();
      //this.originalProductsList = this.productList;
  }

  ngOnInit() {
  let products = this.productService.getAllProducts();
  let categories = this.categoriesService.getCategories();
  forkJoin(products, categories).subscribe(results => {
    this.productList = results[0].response;
    this.categories = results[1].response;
    this.originalProductsList = this.productList;
  });
  }
  /*get f() { return this.addProductForm.controls; }

  onSubmit() {
    //isActive should be set to 1;
    this.submitted = true;
    // stop here if form is invalid
    if (this.addProductForm.invalid) {
        return;
    }
  }*/

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.productList[id][property] = editField;
  }

  remove(id: any) {
    let product = this.productList.splice(id, 1);
    console.log(product);
    this.productService.deleteProduct(product[0]).subscribe(
      (res) => {
        this.toastr.success('Great', 'Upload successfull!');},
      (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.error('Error', 'Upload failed.Check logs or call administrator!');
      }
    );
  }

  add() {
      const category = new Product();
      this.productList.push(category);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  sort(fieldName: string) {
    if (fieldName === 'Id') {
      this.productList.sort((a, b) => a.id-b.id);
    }
    if (fieldName === 'Name') {
      this.productList.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (fieldName === 'Category') {
      this.productList.sort((a, b) => a.category.id - b.category.id);
    }
    if (fieldName === 'DateAdded') {
      this.productList.sort((a, b) =>a.dateAdded>b.dateAdded ? -1 : a.dateAdded<b.dateAdded ? 1 : 0);
    }
  }

  selectProduct(object: any){
    const index = this.productList.indexOf(object)
    this.selectedProduct = this.productList[index];
    this.isSelectedProduct = true;
  }

  deselectProduct(event: any) {
    this.selectedProduct = null;
    this.isSelectedProduct = false;
  }
  filterProductsByName(values: any){
    let name = values.target.value;
    this.productList = this.originalProductsList;
    this.productList = this.productList.filter(function(product) {
      return product.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
  }
}
