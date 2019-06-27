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
  userSettingsForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.userSettingsForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      oPassword: ['', Validators.required],
      nPassword: ['', Validators.required],
      cPassword: ['', Validators.required]
  });
  }
  get f() { return this.userSettingsForm.controls; }

  onSubmit() {
    //isActive should be set to 1;
    this.submitted = true;
    // stop here if form is invalid
    if (this.userSettingsForm.invalid) {
        return;
    }
  }


}
