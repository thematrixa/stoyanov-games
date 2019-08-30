import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/shared/models/product";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Category } from "src/app/shared/models/category";
import { CategoriesService } from "src/app/shared/services/categories-service";
import { ProductService } from "src/app/shared/services/product-service";
import { User } from "src/app/shared/models/user";
import { UserService } from "src/app/shared/services/user-service";
import { forkJoin } from "rxjs";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-user-settings",
  templateUrl: "./user-settings.component.html",
  styleUrls: ["./user-settings.component.css"]
})
export class UserSettingsComponent implements OnInit {
  user: User;
  elements: any = [];
  productList: Array<Product>;
  userSettingsForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.user = this.userService.getLoggedUser();
    this.userSettingsForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      oPassword: [""],
      cPassword: [""],
      nPassword: [""],
      phone: [""]
    });
    this.userSettingsForm.patchValue({ name: this.user.name }, {});
    this.userSettingsForm.patchValue({ phone: this.user.phone });
    this.userSettingsForm.patchValue({ email: this.user.email });
  }
  get f() {
    return this.userSettingsForm.controls;
  }

  onSubmit() {
    //isActive should be set to 1;
    this.submitted = true;
    // stop here if form is invalid
    if (this.userSettingsForm.invalid) {
      return;
    }
    let userSettings = this.userService.generateUserSettingsFromForm(
      this.userSettingsForm
    );
    if (this.haveAllPasswordsBeenEntered(userSettings)) {
      this.saveUserSettings(userSettings,true);
    }
    else{
      this.saveUserSettings(userSettings, false);
    }
  }

  haveAllPasswordsBeenEntered(userSettings) {
    if (
      userSettings.oPassword &&
      userSettings.cPassword &&
      userSettings.nPassword
    ) {
      return true;
    } else {
      return false;
    }
  }

  saveUserSettings(userSettings, isPasswordsEntered) {
    if (isPasswordsEntered) {
      let user = new User();
      user.username = this.user.username;
      user.password = userSettings.oPassword;
      let changePassword = this.userService.changePassword(
        user,
        userSettings.nPassword
      );
      user.phone = userSettings.phone;
      user.name = userSettings.name;
      let saveUserSettings = this.userService.saveUserSettings(user);
      forkJoin(saveUserSettings, changePassword).subscribe(
        results => {
          this.toastr.success("User updated");
        },
        error => {
          console.log(error);
        }
      );
    } else {
      let user = new User();
      user.username = this.user.username;
      user.phone = userSettings.phone;
      user.name = userSettings.name;
      let saveUserSettings = this.userService.saveUserSettings(user);
      forkJoin(saveUserSettings).subscribe(
        results => {
          console.log(results);
          this.toastr.success("Успешно запазване.");
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
