import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ProductDetailsService } from 'src/app/shared/services/product-details.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private productDetails: ProductDetailsService) {
  }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
          preview: true,
          previewArrows: true
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
        small: 'assets/Images/tile-image-mock.jpg',
        medium: 'assets/Images/tile-image-mock.jpg',
        big: 'assets/Images/tile-image-mock.jpg'
      },
      {
        small: 'assets/Images/tile-image-mock.jpg',
        medium: 'assets/Images/tile-image-mock.jpg',
        big: 'assets/Images/tile-image-mock.jpg'
      }
  ];
    this.product = this.productDetails.product;
  }

}
