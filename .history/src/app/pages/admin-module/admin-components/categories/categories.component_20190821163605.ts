import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/shared/models/category";
import { CategoriesService } from "src/app/shared/services/categories-service";
import { HttpErrorResponse } from "@angular/common/http";
import { forkJoin } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap';

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesAdminComponent implements OnInit {
  elements: any = [];
  editField: string;
  categoryList: Array<Category>;

  constructor(
    private categoriesService: CategoriesService,
    private backEndService: BackEndService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit() {
    let categories = this.categoriesService.getCategories();
    forkJoin(categories).subscribe(results => {
      this.categoryList = results[0].response;
    });
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
    const temp = this.categoryList[id].name;
    this.categoryList[id].name = this.categoryList[id - 1].name;
    this.categoryList[id - 1].name = temp;
  }

  shiftDown(id) {
    if (id === this.categoryList.length - 1) {
      return;
    }
    const temp = this.categoryList[id].name;
    this.categoryList[id].name = this.categoryList[id + 1].name;
    this.categoryList[id + 1].name = temp;
  }

  saveCategories() {
    this.categoriesService.setCategories(this.categoryList).subscribe(
      (res) => {
        this.toastr.success('Great', 'Upload successfull!');},
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
