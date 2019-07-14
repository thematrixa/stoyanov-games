import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Category } from "src/app/shared/models/category";
import { Product } from "src/app/shared/models/product";
import { CategoriesService } from "src/app/shared/services/categories-service";
import { BackEndService } from 'src/app/shared/services/back-end-service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

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
    private cd: ChangeDetectorRef,
    private backEndService: BackEndService,
    private toastr: ToastrService
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
      photo1: [""],
      photo2: [""],
      photo3: [""],
      photo4: [""],
      photo5: [""],
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
    this.addProductForm.patchValue({ photo1: this.product.photo1Base64 });
    this.addProductForm.patchValue({ photo2: this.product.photo2Base64 });
    this.addProductForm.patchValue({ photo3: this.product.photo3Base64 });
    this.addProductForm.patchValue({ photo4: this.product.photo4Base64 });
    this.addProductForm.patchValue({ photo5: this.product.photo5Base64 });
    //this.addProductForm.patchValue({ photo2: this.product.photo1Base64 });
    this.addProductForm.patchValue({ inStock: this.product.inStock });
    this.addProductForm.patchValue({
      onSalePercent: this.product.onSalePercent
    });
    this.addProductForm.patchValue({ quantity: this.product.quantity });
    this.addProductForm.patchValue({ price: this.product.price });

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
    this.updateProduct(this.product);
    // have to do an update product table here
  }

  getImage(event, number) {
    this.product["photo" + number + "Base64"] = event;
    console.log(event);
  }
  
  updateProduct(product: Product){
    this.backEndService.updateProduct(product).subscribe(
      (res) => {
        this.toastr.success('Great', 'Upload successfull!');},
      (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.error('Error', 'Upload failed.Check logs or call administrator!');
      }
    );
  }
}
