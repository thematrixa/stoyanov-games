import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart-item';
import { CartService } from 'src/app/shared/services/cart-service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user-service';
import { Address } from 'src/app/shared/models/address';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @ViewChild('customerInfo') customerInfo: ElementRef<HTMLElement>;
  cartItems: Array<CartItem>;
  user: User;
  names: string;
  addresses: Array<Address>;
  
    constructor(private cartService: CartService,
      private router:Router,
      private userService:UserService) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.user = this.userService.getLoggedUser();
    this.names = this.user.name;
    this.addresses = this.user.addresses
  }

  removeFromCart(item:CartItem){
    this.cartService.removeFromCartItems(item);
  }

  sort(fieldName: string) {
    if (fieldName === 'Id') {
      this.cartItems.sort((a, b) => a.product.id-b.product.id);
    }
    if (fieldName === 'Name') {
      this.cartItems.sort((a, b) => a.product.name.localeCompare(b.product.name));
    }
    if (fieldName === 'Category') {
      this.cartItems.sort((a, b) => a.product.categoryId - b.product.categoryId);
    }
    if (fieldName === 'DateAdded') {
      this.cartItems.sort((a, b) =>a.product.dateAdded>b.product.dateAdded ? -1 : a.product.dateAdded<b.product.dateAdded ? 1 : 0);
    }
  }

  navigateToProducts(){
    this.router.navigate(["/products"]);
  }
}
