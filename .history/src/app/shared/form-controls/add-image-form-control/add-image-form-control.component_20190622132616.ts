import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
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
  onChange;
  
  writeValue(obj: any): void {
    const div = this.file.nativeElement;
    this.renderer.setProperty(div, 'textContent', value);
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    const div = this.file.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }
  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  change( $event ) {
    this.onChange($event.target.textContent);
  }

  constructor( private renderer : Renderer2) { }

  ngOnInit() {
  }

}
