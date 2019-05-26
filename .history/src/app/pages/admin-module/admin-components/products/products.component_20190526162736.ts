import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsAdminComponent implements OnInit {

  addProductForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder ) { }

 
  photo2: string;
  inStock: string;
  quantity: string;
  onSalePercent: string;

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
    this.submitted = true;
    // stop here if form is invalid
    if (this.addProductForm.invalid) {
        return;
    }
  }
}
