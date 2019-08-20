import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/shared/models/user";
import { UserService } from "src/app/shared/services/user-service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Address } from "src/app/shared/models/address";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-addresses",
  templateUrl: "./addresses.component.html",
  styleUrls: ["./addresses.component.css"]
})
export class AddressesComponent implements OnInit {
  user: User;
  addresses: Array<Address>;
  submitted = false;
  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.user = this.userService.getLoggedUser();
    console.log(this.user);
    this.addresses = [];
    for (var i = 0; i < this.user.addresses.length; i++) {
      this.user.addresses[i].isValid = true;
      this.addresses.push(this.user.addresses[i]);
    }
  }

  addAddress() {
    let address = new Address("");
    address.name = "";
    this.addresses.push(address);
  }

  isAdressesValid() {
    for (var i = 0; i < this.addresses.length; i++) {
      console.log(this.addresses[i].name.length);
      if (this.addresses[i].name.length == 0) {
        this.triggerErrorClass(i);
        return false;
      }
    }
    return true;
  }

  saveAddresses() {
    if (!this.isAdressesValid()) {
      return;
    }
    this.user.addresses = this.addresses;
    this.userService.updateUserAddress(this.user).subscribe(
      res => {
        this.toastr.success("Адресите са успешно запазени.")
      },
      error => {
        console.log(error);
      }
    );
    //save adresses
  }

  triggerErrorClass(id: number) {
    this.addresses[id].isValid = false;
  }

  clearErrorClass(id: number) {
    this.addresses[id].isValid = true;
  }

  remove(id: any) {
    this.addresses.splice(id, 1);
  }
}
