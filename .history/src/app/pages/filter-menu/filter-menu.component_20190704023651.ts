import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Options, LabelType } from "ng5-slider";
import { Category } from "src/app/shared/models/category";
import { CategoriesService } from 'src/app/shared/services/categories-service';
@Component({
  selector: "app-filter-menu",
  templateUrl: "./filter-menu.component.html",
  styleUrls: ["./filter-menu.component.css"]
})
export class FilterMenuComponent implements OnInit {
  categories: Array<Category>;
  constructor(private categoryService: CategoriesService) {}

  @Output() valuesEmitter = new EventEmitter<any>();

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }
  minValue: number = 0;
  maxValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + "lv";
        case LabelType.High:
          return value + "lv";
        default:
          return value + "lv";
      }
    }
  };

  emitValues(values: any) {
    this.valuesEmitter.emit(values);
  }
}
