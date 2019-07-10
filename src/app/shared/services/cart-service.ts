import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { CartItem } from "../models/cart-item";
import { Product } from "../models/product";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CartService {
  cartItems: Array<CartItem> = [];
  cartTotal = "0.00";

  constructor() { }

  getCartItems() {
    return this.cartItems;
  }
  getCartTotal() {
    return this.cartTotal;
  }
  addToCartItems(cartItem: CartItem) {
    if (this.isCartItemAdded(cartItem)) {
      let alreadyAddedItem = this.getItem(cartItem);
      this.addQuantity(alreadyAddedItem, cartItem.quantity);
    } else {
      this.cartItems.push(cartItem);
    }
    this.cartTotal = this.calculateTotalPrice();
  }

  removeFromCartItems(cartItem: CartItem) {
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.name === cartItem.product.name) {
        this.cartItems.splice(i, 1);
      }
    }
  }

  generateCartItem(product: Product, quantity: number) {
    let cartItem = new CartItem();
    cartItem.product = product;
    cartItem.quantity = quantity;
    return cartItem;
  }

  isCartItemAdded(item: CartItem) {
    let searchResult = false;
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.name === item.product.name) {
        searchResult = true;
      }
    }
    return searchResult;
  }

  getItem(item: CartItem) {
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.name === item.product.name) {
        return this.cartItems[i];
      }
    }
  }

  addQuantity(item: CartItem, quantity: number) {
    for (var i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.name === item.product.name) {
        this.cartItems[i].quantity += quantity;
      }
    }
  }

  calculateTotalPrice() {
    let total = 0;
    for (var i = 0; i < this.cartItems.length; i++) {
      total += +this.cartItems[i].product.price * this.cartItems[i].quantity;
    }
    if(total==0){
      return '0.00';
    }
    return total.toFixed(2).toString();
  }
}
