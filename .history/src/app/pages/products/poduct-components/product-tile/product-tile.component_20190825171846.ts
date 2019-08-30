import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductDetailsService } from 'src/app/shared/services/product-details.service';
import { CartService } from 'src/app/shared/services/cart-service';
import { ProductService } from 'src/app/shared/services/product-service';
import { UserService } from 'src/app/shared/services/user-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  @Input() product: Product;
  @Output() cartUpdate = new EventEmitter<boolean>();
  starsCount = 5;
  rate: number;
  constructor(
    private productDetails: ProductDetailsService,
    private userService: UserService,
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.rate = this.product.rating;
  }


  showDetails() {
    this.productDetails.setProduct(this.product);
  }

  addToCart(event:any){
    let cartComponent = this.cartService.generateCartItem(this.product,1);
    this.cartService.addToCartItems(cartComponent);
    this.cartUpdate.emit(true);
  }
}
