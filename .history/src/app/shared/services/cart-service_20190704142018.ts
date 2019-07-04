import { Injectable } from "@angular/core";
import { Category } from "../models/category";
import { CartItem } from "../models/cart-item";
import { Product } from "../models/product";

@Injectable()
export class CartService {
  cartItems: Array<CartItem> = [];

  constructor() {}

  getCartItems() {
    return this.cartItems;
  }
  addToCartItems(cartItem: CartItem) {
    this.cartItems.push(cartItem);
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
}
