import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductDetailsService } from 'src/app/shared/services/product-details.service';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {

  product: Product = {
    id: '123',
    name: '123',
    description: '123',
    price: '123',
    type: '123',
    tournamentStoreLaunchDate: '123',
    launchDate: '123',
    konamiTournamentLegalDate: '123',
    cardsPerPack: '123',
    size: '123',
    isActive: '123',
    categoryId: '123',
    shortDescription: '123',
    photo1: '123',
    photo2: '123',
    inStock: '123',
    quantity: '123',
    onSalePercent: '123'
  };
  constructor(productDetails: ProductDetailsService) { }

  ngOnInit() {
  }


  showDetails(){
    this.productDetails.product = this.product;
  }

}
