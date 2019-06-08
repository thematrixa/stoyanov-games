import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesEnum } from 'src/app/shared/enums/categories-enum';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';

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
  productList: Array<any> = [
    {
      id: '1',
      name: 'Structure Deck: Order Of the Spellcasters',
      description: 'Contains 40 spellcasters',
      price: '25.00',
      type: 'Structure Deck',
      tournamentStoreLaunchDate: '15.05.2019',
      launchDate: '15.05.2019',
      konamiTournamentLegalDate: '15.05.2019',
      cardsPerPack: '40',
      size: '123',
      isActive: '123',
      categoryId: '1',
      shortDescription: 'spellcaster deck',
      photo1: 'assets/Images/tile-image-mock.jpg',
      photo2: 'assets/Images/tile-image-mock.jpg',
      inStock: '1',
      quantity: '450',
      onSalePercent: '10'},
    { id: '122', name: 'Structure Deck:  Of the Spellcasters', categoryId: '2', dateAdded: '12.10.2001'},
    { id: '124', name: 'Structure Deck: Orde f the Spellcasters', categoryId: '3', dateAdded: '13.10.2001'},
    { id: '128', name: 'Structure Deck: Order Of the Spellcasters', categoryId: '12', dateAdded: '12.10.2001'},
    { id: '120', name: 'Struct e D  Of the Spellcasters', categoryId: '23', dateAdded: '14.10.2001'},
    { id: '129', name: 'Structure De  the Spellcasters', categoryId: '32', dateAdded: '12.10.2001'},
    { id: '123', name: 'Struc ellcasters', categoryId: '13', dateAdded: '12.10.2001'},
    {  id: '121', name: 'Structure Deck: Order Of pellcasters', categoryId: '21', dateAdded: '12.11.2001'},
  ];

  productFilteredList: Array<any> = [];
  addProductForm: FormGroup;
  submitted = false;
categores = [{name: 'Structure Decks'},{name: 'Starter Decks'},{name: 'Booster packs'},{name: 'Accesories'}];
  constructor(private formBuilder: FormBuilder ) { }

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
      const category = new Category();
      this.productList.push(category);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  sort(fieldName: string) {
    if (fieldName === 'Id') {
      this.productList.sort((a, b) => a.id.localeCompare(b.id));
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
