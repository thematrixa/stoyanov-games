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

  getOnSaleProducts(products: any) {
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
  }

  generateProductFromForm(form: FormGroup): Product {
    let formData = form.getRawValue();
    let product = new Product();
    product.cardsPerPack = parseInt(formData.cardsPerPack);
    product.category = {id: formData.category, name: ""};
    product.onSalePercent = parseInt(formData.onSalePercent);
    product.price = parseFloat(formData.price);
    product.quantity = parseInt(formData.quantity);
    product.description = formData.description;
    product.inStock = formData.inStock;
    product.isActive = formData.isActive;
    product.konamiTournamentLegalDate = formData.konamiTournamentLegalDate;
    product.launchDate = formData.launchDate;
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
    product.shortDescription = formData.shortDescription;
    product.size = formData.size;
    product.tournamentStoreLaunchDate = formData.tournamentStoreLaunchDate;
    product.dateAdded = this.dateFormatter.transform(new Date());
    return product;
  }

    //i can use async await
    getProducts() {
      const url = environment._BACKEND + "/products/get";
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

    updateRating(numberOfStars: number, username, product: Product){
      let data = {
        "numberOfStars": numberOfStars,
        "username": username,
        "productId": product.id,
      }
      let url = environment._BACKEND + "/products/rating/update";
      console.log(data);
      return this.backEnd.post<any>(url, JSON.stringify(data), this.options);
    }

    insertComment(content, productId, username, userVote){
      let comment = {
        "content": content,
        "productId": productId,
        "username": username,
        "rating": userVote
      }
      let url = environment._BACKEND + "/comment/insert";
      console.log(comment);
      return this.backEnd.post<any>(url, JSON.stringify(comment), this.options);
    }

    getComments(product: Product) {
      const url = environment._BACKEND + "/comments/get";
      return this.backEnd.post<any>(url, JSON.stringify(product), this.options);
    }
    
}
