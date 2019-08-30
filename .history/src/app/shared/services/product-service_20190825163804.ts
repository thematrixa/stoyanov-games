import { FormGroup } from '@angular/forms';
import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { toInt } from 'ngx-bootstrap/chronos/utils/type-checks';
import { DateFormatPipe } from '../pipes/date-format-pipe';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StoyanovGamesResponse } from '../models/stoyanov-games-response';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  products: Array<Product> = [];
  private options = {
    headers: new HttpHeaders().set("Content-Type", "application/json")
  };

  constructor(private dateFormatter: DateFormatPipe,
    private backEnd: HttpClient) { }

  /*getOnSaleProducts(products: any) {
    return products.filter(function (product) {
      return Number(product.onSalePercent) > 0;
    });
  }

  getNewProducts(products:any) {
    return products.filter(function (product) {
      const d1 = new Date();
      const d2 = new Date(product.dateAdded);
      return (d1.getMonth() - d2.getMonth()) <= 1 && d1.getFullYear() === d2.getFullYear();
    });
  }*/

  generateProductFromForm(form: FormGroup): Product {
    let formData = form.getRawValue();
    console.log(formData);
    let product = new Product();
    product.cardsPerPack = parseInt(formData.cardsPerPack);
    product.category = {id: formData.category, name: ""};
    product.onSalePercent = parseInt(formData.onSalePercent);
    product.price = parseFloat(formData.price);
    product.quantity = parseInt(formData.quantity);
    product.description = formData.description;
    product.inStock = formData.inStock && formData.inStock != "" ? true : false;
    product.isActive = formData.isActive && formData.isActive != "" ? true : false;
    product.konamiTournamentLegalDate = formData.konamiTournamentLegalDate ? new Date(formData.konamiTournamentLegalDate) : null;
    product.launchDate = formData.launchDate ? new Date(formData.launchDate) : null;
    product.tournamentStoreLaunchDate = formData.tournamentStoreLaunchDate ? new Date(formData.tournamentStoreLaunchDate) : null;
    product.name = formData.name;
    product.five_stars = 0;
    product.four_stars = 0;
    product.three_stars = 0;
    product.two_stars = 0;
    product.one_stars = 0;
    product.photo1Base64 = formData.photo1;
    product.photo2Base64 = formData.photo2;
    product.photo3Base64 = formData.photo3;
    product.photo4Base64 = formData.photo4;
    product.photo5Base64 = formData.photo5;
    //product.dateAdded = this.dateFormatter.transform(new Date());
    product.dateAdded = new Date();
    
    return product;
  }

    //i can use async await
    getAllProducts() {
      const url = environment._BACKEND + "/products/get";
      return this.backEnd.get<StoyanovGamesResponse<Product[]>>(url, this.options);
    }
    getActiveProducts() {
      const url = environment._BACKEND + "/products/get/active";
      return this.backEnd.get<StoyanovGamesResponse<Product[]>>(url, this.options);
    }
    
    getOnSaleProducts() {
      const url = environment._BACKEND + "/products/on-sale";
      return this.backEnd.get<StoyanovGamesResponse<Product[]>>(url, this.options);
    }
    
    getNewProducts() {
      const url = environment._BACKEND + "/products/new";
      return this.backEnd.get<StoyanovGamesResponse<Product[]>>(url, this.options);
    }
    
    setProducts(products): Observable<any> {
      let url = environment._BACKEND + "/products/batch-update";
      console.log(products);
      return this.backEnd.post<any>(url, products, this.options);
    }
  
    updateProduct(product): Observable<any> {
      let url = environment._BACKEND + "/products/update";
      console.log(product);
      return this.backEnd.post<any>(url, product, this.options);
    }
    
    deleteProduct(product: Product) {
      const url = environment._BACKEND + "/products/delete";
      return this.backEnd.post<any>(url, product, this.options);
    }

    updateRating(numberOfStars: number, product: Product){
      let data = {
        "numberOfStars": numberOfStars,
        "productId": product.id,
      }
      let url = environment._BACKEND + "/products/rating/update";
      console.log(data);
      return this.backEnd.post<any>(url, JSON.stringify(data), this.options);
    }

    insertComment(content, productId , userVote){
      let comment = {
        "content": content,
        "productId": productId,
        "rating": userVote
      }
      let url = environment._BACKEND + "/products/comment/insert";
      console.log(comment);
      return this.backEnd.post<any>(url, JSON.stringify(comment), this.options);
    }

    getComments(product: Product) {
      const url = environment._BACKEND + "/products/comments/get";
      return this.backEnd.post<any>(url, JSON.stringify(product), this.options);
    }

    hasUserVoted(username, productId) {
    let data = {
      "productId": productId
    }
      const url = environment._BACKEND + "/products/rating/has-voted";
      return this.backEnd.post<any>(url, JSON.stringify(data), this.options);
    }
    
    hasUserCommented(username, productId) {
      let data = {
        "productId": productId
      }
        const url = environment._BACKEND + "/products/comment/has-commented";
        return this.backEnd.post<any>(url, JSON.stringify(data), this.options);
      }
}
