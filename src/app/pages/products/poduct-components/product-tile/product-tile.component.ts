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
    name: 'Structure Deck: Order Of the Spellcasters',
    description: 'Contains 40 spellcasters',
    price: '25.00',
    type: 'Structure Deck',
    tournamentStoreLaunchDate: '15.05.2019',
    launchDate: '15.05.2019',
    konamiTournamentLegalDate: '15.05.2019',
    cardsPerPack: '40',
    size: '123',
    isActive: '123',
    categoryId: '123',
    shortDescription: 'spellcaster deck',
    photo1: 'assets/Images/tile-image-mock.jpg',
    photo2: 'assets/Images/tile-image-mock.jpg',
    inStock: '1',
    quantity: '450',
    onSalePercent: '10'
  };
  constructor(private productDetails: ProductDetailsService) { }

  ngOnInit() {
  }


  showDetails(){
    this.productDetails.setProduct(this.product);
  }

}
