import { Component, OnInit, Input } from "@angular/core";
import { Product } from "src/app/shared/models/product";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-gallery";
import { ProductDetailsService } from "src/app/shared/services/product-details.service";
import { CartService } from "src/app/shared/services/cart-service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ProductService } from "src/app/shared/services/product-service";
import { UserService } from "src/app/shared/services/user-service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  quantity: number = 1;
  starsCount = 5;
  rate: number;
  content: string;
  hasUserVoted: boolean = false;
  comments: Array<any>;
  userVote: number;
  constructor(
    private productDetails: ProductDetailsService,
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.product = this.productDetails.getProduct();
    if (!this.product) {
      this.router.navigate(["/products"]);
    }
    this.galleryOptions = [
      {
        width: "400px",
        height: "300px",
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "600px",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: "assets/Images/tile-image-mock.jpg",
        medium: "assets/Images/tile-image-mock.jpg",
        big: "assets/Images/tile-image-mock.jpg"
      },
      {
        small: this.product.photo2Base64,
        medium: this.product.photo2Base64,
        big: this.product.photo2Base64
      },
      {
        small: this.product.photo3Base64,
        medium: this.product.photo3Base64,
        big: this.product.photo3Base64
      },
      {
        small: this.product.photo4Base64,
        medium: this.product.photo4Base64,
        big: this.product.photo4Base64
      },
      {
        small: this.product.photo5Base64,
        medium: this.product.photo5Base64,
        big: this.product.photo5Base64
      }
    ];
    this.rate = this.product.rating;
    this.getComments();
  }

  addToCart() {
    let cartComponent = this.cartService.generateCartItem(
      this.product,
      this.quantity
    );
    this.cartService.addToCartItems(cartComponent);
  }

  updateRating(newValue) {
    this.userVote = newValue;
    let loggedUser = this.userService.getLoggedUser();
    this.productService
      .updateRating(newValue, loggedUser.username, this.product)
      .subscribe(
        res => {
          this.rate = res.response;
          this.hasUserVoted = true;
        },
        error => {
          this.toastr.error(error);
        }
      );
  }

  postComment(){
    if(!this.hasUserVoted){
      this.toastr.warning("Рейтването на продукт е задължително!");
      return;
    }
    let loggedUser = this.userService.getLoggedUser();
    this.productService
      .insertComment(this.content, loggedUser.username, this.product.id, this.userVote)
      .subscribe(
        res => {
          this.toastr.success("Коментарът е добавен.");
        },
        error => {
          this.toastr.error(error);
        }
      );
  }

  getComments(){
    this.productService.getComments(this.product).subscribe(res => {
      this.comments = res.response;
    },
    error => {
      this.toastr.error(error);
    });
  }

}
