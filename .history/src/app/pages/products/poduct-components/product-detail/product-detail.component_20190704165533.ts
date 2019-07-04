import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ProductDetailsService } from 'src/app/shared/services/product-details.service';
import { CartService } from 'src/app/shared/services/cart-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  quantity:number = 1;
  constructor(private productDetails: ProductDetailsService,
      private cartService: CartService) {
  }

  ngOnInit() {
    this.product = this.productDetails.getProduct();
    this.galleryOptions = [
      {
          width: '400px',
          height: '300px',
          thumbnailsColumns: 3,
          imageAnimation: NgxGalleryAnimation.Slide,
          previewCloseOnClick  : true,
          previewCloseOnEsc : true,
          previewKeyboardNavigation : true,
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20,
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }

  ];

  this.galleryImages = [
      {
          small: 'assets/Images/tile-image-mock.jpg',
          medium: 'assets/Images/tile-image-mock.jpg',
          big: 'assets/Images/tile-image-mock.jpg'
      },
      {
        small: this.product.photo2Base64,
        medium: this.product.photo2Base64,
        big: this.product.photo2Base64
      },
      {
        small: this.product.photo3Base64,
        medium: this.product.photo3Base64,
        big: this.product.photo3Base64,
      },
      {
        small: this.product.photo4Base64,
        medium: this.product.photo4Base64,
        big: this.product.photo4Base64,
      },
      {
        small: this.product.photo5Base64,
        medium: this.product.photo5Base64,
        big: this.product.photo5Base64,
      }
  ];
  }

  addToCart(){
    let cartComponent = this.cartService.generateCartItem(this.product,this.quantity);
    this.cartService.addToCartItems(cartComponent);
  }
}
