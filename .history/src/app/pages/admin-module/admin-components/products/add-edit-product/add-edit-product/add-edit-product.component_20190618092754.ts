import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Product } from "src/app/shared/models/product";
import { Category } from "src/app/shared/models/category";
import { CategoriesService } from "src/app/shared/services/categories-service";

@Component({
  selector: "app-add-edit-product",
  templateUrl: "./add-edit-product.component.html",
  styleUrls: ["./add-edit-product.component.css"]
})
export class AddEditProductComponent implements OnInit {
  @Input() product: Product;
  @Output() deselectProductEmitter = new EventEmitter<boolean>();
  buttonLabel = "Add product";
  addProductForm: FormGroup;
  submitted = false;
  // tslint:disable-next-line:whitespace
  categores: Array<Category>;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private cd: ChangeDetectorRef
  ) {
    this.categores = this.categoriesService.getCategories();
  }

  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      price: ["", Validators.required],
      type: ["", Validators.required],
      tournamentStoreLaunchDate: ["", Validators.required],
      launchDate: ["", Validators.required],
      konamiTournamentLegalDate: ["", Validators.required],
      cardsPerPack: ["", Validators.required],
      size: ["", Validators.required],
      isActive: ["", Validators.required],
      categoryId: ["", Validators.required],
      shortDescription: ["", Validators.required],
      photo1: ["", Validators.required],
      photo2: ["", Validators.required],
      inStock: ["", Validators.required],
      onSalePercent: ["", Validators.required],
      quantity: ["", Validators.required]
    });
    this.addProductForm.patchValue({ name: this.product.name }, {});
    this.addProductForm.patchValue({ description: this.product.description });
    this.addProductForm.patchValue({ type: this.product.type });
    this.addProductForm.patchValue({
      tournamentStoreLaunchDate: this.product.tournamentStoreLaunchDate
    });
    this.addProductForm.patchValue({ launchDate: this.product.launchDate });
    this.addProductForm.patchValue({
      konamiTournamentLegalDate: this.product.konamiTournamentLegalDate
    });
    this.addProductForm.patchValue({ cardsPerPack: this.product.cardsPerPack });
    this.addProductForm.patchValue({ size: this.product.size });
    this.addProductForm.patchValue({ isActive: this.product.isActive });
    this.addProductForm.patchValue({ categoryId: this.product.categoryId });
    this.addProductForm.patchValue({ isActive: this.product.isActive });
    this.addProductForm.patchValue({
      shortDescription: this.product.shortDescription
    });
    this.addProductForm.patchValue({ photo1: this.product.photo1File });
    this.addProductForm.patchValue({ photo2: this.product.photo1File });
    this.addProductForm.patchValue({ inStock: this.product.inStock });
    this.addProductForm.patchValue({
      onSalePercent: this.product.onSalePercent
    });
    this.addProductForm.patchValue({ quantity: this.product.quantity });
    this.addProductForm.patchValue({ price: this.product.price });
    document.getElementById(
      "forphoto1"
    ).innerHTML = this.product.photo1File.name;
    document.getElementById(
      "forphoto2"
    ).innerHTML = this.product.photo2File.name;
    if (this.product && this.product.name && this.product.name.length > 0) {
      this.buttonLabel = "Update product";
    }
  }

  get f() {
    return this.addProductForm.controls;
  }

  onSubmit() {
    // isActive should be set to 1;
    this.submitted = true;
    // stop here if form is invalid
    if (this.addProductForm.invalid) {
      return;
    }
    this.deselectProductEmitter.emit(false);
    // have to do an update product table here
  }
  handleFileInput(event: any) {
    this.getBase64(event);
    if (event.target.id === "photo1") {
      this.product.photo1File = event.target.files.item(0);
    } else if (event.target.id === "photo2") {
      this.product.photo2File = event.target.files.item(0);
    }
    document.getElementById(
      "for" + event.target.id
    ).innerHTML = event.target.files.item(0).name;
  }
   getBase64(event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files.item(0));
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
}
