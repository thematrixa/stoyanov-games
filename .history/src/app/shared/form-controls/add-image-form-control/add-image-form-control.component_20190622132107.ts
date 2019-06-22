import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-add-image-form-control',
  templateUrl: './add-image-form-control.component.html',
  styleUrls: ['./add-image-form-control.component.css']
})
export class AddImageFormControlComponent implements OnInit, ControlValueAccessor {
  @ViewChild('image') image;
  @ViewChild('imageDefault') imageDefault;
  @ViewChild('file') file;
  
  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  ngOnInit() {
  }

}
