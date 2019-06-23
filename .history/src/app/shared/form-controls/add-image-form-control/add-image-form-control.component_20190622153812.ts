import { Component, OnInit, ViewChild, Renderer2, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'add-image',
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
  @ViewChild('image') image: ElementRef;
  @ViewChild('imageDefault') imageDefault: ElementRef;
  @ViewChild('fileInput') fileInput: ElementRef;
  isImageUploaded: boolean = false;
  private file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.file = file;
  }
  
  writeValue(value: any): void {
    if(!this.image)return;
    const image = this.image.nativeElement;
    this.renderer.setProperty(image, 'src', value);
    this.isImageUploaded = true;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
    if(!this.fileInput)return;
    const div = this.fileInput.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }
  
  registerOnChange( fn : any ) : void {
    this.host.nativeElement.value = '';
    this.file = null;
  }

  change(event) {
    this.getBase64(event);
  }

  constructor( private renderer : Renderer2, private host: ElementRef<HTMLInputElement> ) { }

  ngOnInit() {
  }

  getBase64(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files.item(0));
    let writeResult = function (value){
      this.writeResult(value);
    }
    reader.onload = function () {
      debugger;
      writeResult(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
}