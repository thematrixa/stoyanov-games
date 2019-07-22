import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductDetailsService } from 'src/app/shared/services/product-details.service';
import { CartService } from 'src/app/shared/services/cart-service';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
  @Input() product: Product;
  @Output() cartUpdate = new EventEmitter<boolean>();
  starsCount = 5;
  constructor(
    private productDetails: ProductDetailsService,
    private cartService: CartService) { }

  ngOnInit() {
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
