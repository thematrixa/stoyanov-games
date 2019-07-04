import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';
import { CategoriesService } from 'src/app/shared/services/categories-service';
import { ProductService } from 'src/app/shared/services/product-service';

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
  addProductForm: FormGroup;
  submitted = false;
  categories: Array<Category>;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private productService: ProductService) {
      this.productList = this.productService.getProducts();
      this.categories = this.categoriesService.getCategories();
  }


  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      type: ['', Validators.required],
      tournamentStoreLaunchDate: ['', Validators.required],
      launchDate: ['', Validators.required],
      konamiTournamentLegalDate: ['', Validators.required],
      cardsPerPack: ['', Validators.required],
      size: ['', Validators.required],
      isActive: ['', Validators.required],
      categoryId: ['', Validators.required],
      shortDescription: ['', Validators.required],
      photo1: ['', Validators.required],
      photo2: ['', Validators.required],
      inStock: ['', Validators.required],
      onSalePercent: ['', Validators.required],
      quantity: ['', Validators.required]
  });
  }
  get f() { return this.addProductForm.controls; }

  onSubmit() {
    //isActive should be set to 1;
    this.submitted = true;
    // stop here if form is invalid
    if (this.addProductForm.invalid) {
        return;
    }
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.productList[id][property] = editField;
  }

  remove(id: any) {
    this.productList.splice(id, 1);
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
      this.productList.sort((a, b) => a.id.
      localeCompare(b.id));
    }
    if (fieldName === 'Name') {
      this.productList.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (fieldName === 'Category') {
      this.productList.sort((a, b) => a.categoryId.localeCompare(b.categoryId));
    }
    if (fieldName === 'DateAdded') {
      this.productList.sort((a, b) => a.dateAdded.localeCompare(b.dateAdded));
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
}
