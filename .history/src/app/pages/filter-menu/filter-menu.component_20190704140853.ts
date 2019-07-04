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

  private value:any = [];
  private _disabledV:string = '0';
  private disabled:boolean = false;
  public multiple:boolean = false;
  private items:Array<any> = [];
  selectedItems = [];
  dropdownSettings = {};

  @Output() priceEmitter = new EventEmitter<any>();
  @Output() categoriesEmitter = new EventEmitter<any>();

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
      maxHeight:'300px'
    };
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

  emitPrice(values: any) {
    this.priceEmitter.emit({'prices': {'value':this.minValue, 'highValue':this.maxValue},'selectedItems': this.selectedItems});
  }

  emitCategories(values: any) {
    this.categoriesEmitter.emit({'prices': {'value':this.minValue, 'highValue':this.maxValue},'selectedItems': this.selectedItems});
  }
}
