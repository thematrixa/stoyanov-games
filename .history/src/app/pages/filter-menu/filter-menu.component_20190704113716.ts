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

  @Output() priceEmitter = new EventEmitter<any>();
  @Output() categoriesEmitter = new EventEmitter<any>();
  categories: Array<Category>;
  selectedItems = [];
  dropdownSettings = {};
  minValue: number = 0;
  maxValue: number = 100;
  public multiple:boolean = false;

  constructor(private categoryService: CategoriesService) {}
  

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: false,
      defaultOpen:true,
      enableCheckAll:false,
    };
  }
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

  emitPrice(values: any) {
    this.priceEmitter.emit({values: values,selectedItems: this.selectedItems});
  }

  emitCategories(values: any) {
    this.categoriesEmitter.emit({values: {value:this.minValue, highValue:this.maxValue},selectedItems: this.selectedItems});
  }
}
