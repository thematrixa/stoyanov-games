import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart-item';
import { CartService } from 'src/app/shared/services/cart-service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user-service';
import { Address } from 'src/app/shared/models/address';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/shared/models/order';
import { Product } from 'src/app/shared/models/product';
import { formatDate } from '@angular/common';
import { OrderStatusEnum } from 'src/app/shared/enums/order-status-enum';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {
  //CONSTANTS
  dataColWidth: number = 10;
  
  @ViewChild('customerInfo') customerInfo: ElementRef<HTMLElement>;
  orderStatus: OrderStatusEnum;
  cartItems: Array<CartItem>;
  addresses: Array<Address> = [];
  names: string;
  address: string;
  user: User;

    constructor(private cartService: CartService,
      private router:Router,
      private userService:UserService) {
      this.addresses.push(new Address(""));
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.user = this.userService.getLoggedUser();

    if(this.user.name){
      this.names = this.user.name;
    }

    if(this.user.addresses){
      this.addresses = this.user.addresses;
    }
  }

  ngAfterViewInit() {
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

  isPayFormValid(){
    if(this.names.length>0 && this.address.length > 0){
      return true;
    }
    else{
      return false;
    }
  }

  pay(){
    if(!this.isPayFormValid()){
      return;
    }
  }

  generateOrder(){
    let order = new Order();
    order.name = this.names;
    order.address = this.address;
    order.date = formatDate(new Date(), 'dd.MM.yyyy HH:mm:ss', 'en');
    order.userId = this.user.id;
    order.total = parseFloat(this.cartService.getCartTotal());
    order.phone = this.user.phone;
    order.products = this.extractProducts();
    order.status = this.orderStatus.UNCONFIRMED;
    return order;
  }

  extractProducts(){  
    let products: Array<Product> = [];
    for(let i = 0; i < products.length; i++){
      products.push(this.cartItems[i].product);
    }
    return products;
  }

  submit(){

  }
}
