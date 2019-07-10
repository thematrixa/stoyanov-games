import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart-item';
import { CartService } from 'src/app/shared/services/cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Array<CartItem>
    constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item:CartItem){
    this.cartService.removeFromCartItems(item);
  }

  sort(fieldName: string) {
    if (fieldName === 'Id') {
      this.cartItems.sort((a, b) => a.product.id.
      localeCompare(a.product.id));
    }
    if (fieldName === 'Name') {
      this.cartItems.sort((a, b) => a.product.name.localeCompare(a.product.name));
    }
    if (fieldName === 'Category') {
      this.cartItems.sort((a, b) => a.product.categoryId.localeCompare(a.product.categoryId));
    }
    if (fieldName === 'DateAdded') {
      this.cartItems.sort((a, b) => a.product.dateAdded.localeCompare(a.product.dateAdded));
    }
  }
}
