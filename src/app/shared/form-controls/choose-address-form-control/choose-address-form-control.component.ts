import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChildren,
  AfterViewInit,
  EventEmitter,
  Output
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "choose-address",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ChooseAddressFormControlComponent,
      multi: true
    }
  ],
  templateUrl: "./choose-address-form-control.component.html",
  styleUrls: ["./choose-address-form-control.component.css"]
})
export class ChooseAddressFormControlComponent
  implements OnInit, ControlValueAccessor {
  @Input("addresses") addresses;
  @ViewChildren("radio") radioButtons;
  @Output() address = new EventEmitter<string>();
  value: string;
  customAddress: string;


  ngOnInit() {
  }

  writeValue(value: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {
    //  const action = isDisabled ? 'addClass' : 'removeClass';
    // this.renderer[action](div, 'disabled');
  }

  registerOnChange(fn: any): void {}

  change(event) {}

  reset() {
    this.radioButtons.forEach(child => {
      child.nativeElement.checked = false;
    });
  }

  setValue(event:any){
    console.log(event.target.value);
    event.target.checked = true;
    this.value = event.target.value;
    this.address.emit(this.value);
  }
  constructor(
    private renderer: Renderer2,
    private host: ElementRef<HTMLInputElement>
  ) {}

}
