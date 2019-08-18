import { Component, OnInit, AfterViewInit, ViewChild, Renderer2, HostListener, ElementRef, EventEmitter, Output } from '@angular/core';
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
  @Output() imageLoaded = new EventEmitter<string | ArrayBuffer>();
  isImageUploaded: boolean = false;
  private file: File | null = null;
  fileWaitingToBeLoaded: string;
  value: string | ArrayBuffer;
  ngOnInit() {
    if(this.fileWaitingToBeLoaded){
      this.writeValue(this.fileWaitingToBeLoaded);
    }
  }

  ngAfterViewInit() {
    if(this.fileWaitingToBeLoaded){
      this.writeValue(this.fileWaitingToBeLoaded);
    }
  }
  writeValue(value: any): void {
    if(!value){
      this.isImageUploaded = false;
      return;
    }
    const image = this.image.nativeElement;
    this.value = value;
    this.renderer.setProperty(image, 'src', value);
    this.isImageUploaded = true;
    console.log('ok');
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

  getBase64(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files.item(0));
    reader.onload = (e) => {
      this.writeValue(reader.result);
      this.imageLoaded.emit(reader.result);
      this.value = reader.result;
      console.log(reader.result);
      console.log(this.value);
    }
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
}
