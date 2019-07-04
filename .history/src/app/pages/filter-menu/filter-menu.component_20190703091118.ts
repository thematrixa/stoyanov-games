import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> lv' + value;
        case LabelType.High:
          return '<b>Max price:</b> lv' + value;
        default:
          return '$' + value;
      }
    }
  };
}
}
