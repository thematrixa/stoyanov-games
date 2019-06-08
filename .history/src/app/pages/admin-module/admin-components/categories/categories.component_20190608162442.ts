import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category';
import { CategoriesService } from 'src/app/shared/services/categories-service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesAdminComponent implements OnInit {
  elements: any = [];
  editField: string;
  categoryList: Array<Category>;

  constructor(private categoriesService: CategoriesService) {
    this.categoryList = this.categoriesService.getCategories();
  }

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
