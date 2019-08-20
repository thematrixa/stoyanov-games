import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { CartItem } from "src/app/shared/models/cart-item";
import { CartService } from "src/app/shared/services/cart-service";
import { Router } from "@angular/router";
import { User } from "src/app/shared/models/user";
import { UserService } from "src/app/shared/services/user-service";
import { Address } from "src/app/shared/models/address";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Order } from "src/app/shared/models/order";
import { Product } from "src/app/shared/models/product";
import { formatDate } from "@angular/common";
import { OrderService } from "src/app/shared/services/orders-service";
import { OrderStatusEnum } from "src/app/shared/enums/order-status-enum";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit, AfterViewInit {
  //CONSTANTS
  dataColWidth: number = 10;
  isDataActive: boolean;
  isCartPreviewActive: boolean;
  @ViewChild("tabset") public tabs;
  @ViewChild("customerInfo") customerInfo: ElementRef<HTMLElement>;
  cartItems: Array<CartItem>;
  addresses: Array<Address> = [];
  names: string;
  address: string;
  user: User;

  constructor(
    private cartService: CartService,
    private router: Router,
    private userService: UserService,
    private orderService: OrderService,
    private toastrService: ToastrService
  ) {
    this.addresses.push(new Address(""));
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.user = this.userService.getLoggedUser();

    if (this.user.name) {
      this.names = this.user.name;
    }

    if (this.user.addresses) {
      this.addresses = this.user.addresses;
    }
  }

  ngAfterViewInit() {
    this.cartItems = this.cartService.getCartItems();
    this.user = this.userService.getLoggedUser();
    this.names = this.user.name;
    this.addresses = this.user.addresses;
  }

  removeFromCart(item: CartItem) {
    this.cartService.removeFromCartItems(item);
  }

  sort(fieldName: string) {
    if (fieldName === "Id") {
      this.cartItems.sort((a, b) => a.product.id - b.product.id);
    }
    if (fieldName === "Name") {
      this.cartItems.sort((a, b) =>
        a.product.name.localeCompare(b.product.name)
      );
    }
    if (fieldName === "Category") {
      this.cartItems.sort(
        (a, b) => a.product.category.id - b.product.category.id
      );
    }
    if (fieldName === "DateAdded") {
      this.cartItems.sort((a, b) =>
        a.product.dateAdded > b.product.dateAdded
          ? -1
          : a.product.dateAdded < b.product.dateAdded
          ? 1
          : 0
      );
    }
  }

  navigateToProducts() {
    this.router.navigate(["/products"]);
  }

  isPayFormValid() {
    if (
      this.names.length > 0 &&
      this.address.length > 0 &&
      this.cartItems.length > 0
    ) {
      this.toastrService.success("Поръчката се обработва");
      return true;
    } else {
      this.toastrService.success("Невалидна поръчка");
      return false;
    }
  }

  pay() {
    if (!this.isPayFormValid()) {
      return;
    }
    let order = this.generateOrder();
    this.orderService.setOrder(order).subscribe(
      re => {
        console.log(re);
        this.toastr.success("Great", "Upload successfull!");
      },
      error => {
        console.log(error);
      }
    );
  }

  setAddress(event: any) {
    this.address = event;
  }

  generateOrder() {
    let order = new Order();
    order.name = this.names;
    order.address = this.address;
    order.date = formatDate(new Date(), "dd.MM.yyyy HH:mm:ss", "en");
    order.userId = this.user.id;
    order.total = parseFloat(this.cartService.getCartTotal());
    order.phone = this.user.phone;
    order.cartItems = this.cartItems;
    order.status = OrderStatusEnum.UNCONFIRMED;
    return order;
  }

  extractProducts() {
    let products: Array<Product> = [];
    for (let i = 0; i < this.cartItems.length; i++) {
      products.push(this.cartItems[i].product);
    }
    return products;
  }

  submit() {}

  cartTotal() {
    return this.cartService.getCartTotal();
  }

  proceed() {
    if (this.isDataActive) {
      this.pay();
    } else {
      this.isDataActive = true;
      this.isCartPreviewActive = false;
    }
  }
}
