import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Renderer2,
  HostListener,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "add-image",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddImageFormControlComponent,
      multi: true
    }
  ],
  templateUrl: "./add-image-form-control.component.html",
  styleUrls: ["./add-image-form-control.component.css"]
})
export class AddImageFormControlComponent
  implements OnInit, ControlValueAccessor {
  @ViewChild("image") image: ElementRef;
  @ViewChild("imageDefault") imageDefault: ElementRef;
  @ViewChild("fileInput") fileInput: ElementRef;
  @Output() imageLoaded = new EventEmitter<string | ArrayBuffer>();
  isImageUploaded: boolean = false;
  base64ImageToBeLoaded: string;
  isLoading = false;
  value: string;
  ngOnInit() {
    if (this.base64ImageToBeLoaded) {
      this.writeValue(this.base64ImageToBeLoaded);
    }
  }

  ngAfterViewInit() {
    if (this.base64ImageToBeLoaded) {
      this.writeValue(this.base64ImageToBeLoaded);
    }
  }
  writeValue(value: any): void {
    if (!value) {
      this.isImageUploaded = false;
      return;
    }
    const image = this.image.nativeElement;
    this.renderer.setProperty(image, "src", value);
    this.value = value;
    this.isImageUploaded = true;
    console.log("ok");
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {
    if (!this.fileInput) return;
    const div = this.fileInput.nativeElement;
    const action = isDisabled ? "addClass" : "removeClass";
    this.renderer[action](div, "disabled");
  }

  registerOnChange(fn: any): void {
  }

  change(event) {
    this.getBase64(event);
  }

  constructor(
    private renderer: Renderer2,
    private host: ElementRef<HTMLInputElement>
  ) {}

  getBase64(event) {
    this.isLoading = true;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files.item(0));
    reader.onload = e => {
      this.writeValue(reader.result);
      this.value = <string>reader.result;
      this.base64ImageToBeLoaded = <string>reader.result;
      this.imageLoaded.emit(reader.result);
      console.log(reader.result);
      console.log(this.value);
      this.isLoading = false;
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  }
}