import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit {

  constructor() { }

  @Output() minValueEmitter = new EventEmitter<number>();
  @Output() maxValueEmitter = new EventEmitter<number>();

  ngOnInit() {
  }
  minValue: number = 0;
  maxValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + 'lv' ;
        case LabelType.High:
          return value + 'lv'  ;
        default:
          return value + 'lv' ;
      }
    }
  };

  emitMinValue(){
    this.minValueEmitter.emit(this.minValue);
  }
  emitMaxValue(){
    this.maxValueEmitter.emit(this.maxValue);
  }
}

