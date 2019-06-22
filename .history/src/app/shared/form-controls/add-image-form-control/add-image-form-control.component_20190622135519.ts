import { Component, OnInit, ViewChild, Renderer2, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-add-image-form-control',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddImageFormControlComponent,
      multi: true
    }
  ],
  templateUrl: './add-image-form-control.component.html',
  styleUrls: ['./add-image-form-control.component.css']
})
export class AddImageFormControlComponent implements OnInit, ControlValueAccessor {
  @ViewChild('image') image;
  @ViewChild('imageDefault') imageDefault;
  @ViewChild('fileInput') fileInput;
  isImageUploaded: boolean = false;
  onChange;
  private file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.file = file;
  }
  
  writeValue(value: any): void {
    const image = this.fileInput.nativeElement;
    this.renderer.setProperty(image, 'src', value);
    this.isImageUploaded = true;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
    const div = this.fileInput.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }
  registerOnChange( fn : any ) : void {
    this.host.nativeElement.value = '';
    this.file = null;
  }

  change( $event ) {
    this.onChange($event.target.textContent);
  }

  constructor( private renderer : Renderer2, private host: ElementRef<HTMLInputElement> ) { }

  ngOnInit() {
  }

}
