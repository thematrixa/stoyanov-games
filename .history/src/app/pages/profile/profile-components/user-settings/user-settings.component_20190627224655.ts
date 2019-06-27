import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/category';
import { CategoriesService } from 'src/app/shared/services/categories-service';
import { ProductService } from 'src/app/shared/services/product-service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  elements: any = [];
  productList: Array<Product>;
  addProductForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder) {
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


}
