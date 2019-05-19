import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  editField: string;
  categoryList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom', city: 'London' },
  ];

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.categoryList[id][property] = editField;
  }

  remove(id: any) {
    this.categoryList.splice(id, 1);
  }

  add() {
      const category = new Category();
      this.categoryList.push(category);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  shiftUp(id) {
    if (id === 0) {
      return;
    }
    const temp = this.categoryList[id];
    this.categoryList[id] = this.categoryList[id - 1];
    this.categoryList[id - 1] = temp;
  }

  shiftDown(id) {
    if (id === this.categoryList.length - 1) {
      return;
    }
    const temp = this.categoryList[id];
    this.categoryList[id] = this.categoryList[id + 1];
    this.categoryList[id + 1] = temp;
  }
}
