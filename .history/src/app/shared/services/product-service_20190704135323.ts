import { Injectable } from "@angular/core";
import { Product } from "../models/product";

@Injectable()
export class ProductService {
  products: Array<Product> = [
    {
      id: "1",
      name: "Structure Deck: Order Of the Spellcasters",
      description: "Contains 40 spellcasters",
      price: "25.00",
      type: "Structure Deck",
      tournamentStoreLaunchDate: "15/05/2011",
      launchDate: "15.05.2011",
      konamiTournamentLegalDate: "15.05.2011",
      cardsPerPack: "40",
      size: "123",
      isActive: "123",
      categoryId: "1",
      shortDescription: "spellcaster deck",
      inStock: "1",
      quantity: "450",
      onSalePercent: "0",
      dateAdded: "11/05/2011",
      photo1Base64: 'assets/Images/tile-image-mock.jpg',
      photo2Base64: '',
      photo3Base64: '',
      photo4Base64: '',
      photo5Base64: ''
    },
    {
      id: "2",
      name: "Structure Deck: Soulburner",
      description: "Contains 40 cyberse",
      price: "25.00",
      type: "Structure Deck",
      tournamentStoreLaunchDate: "15.05.2011",
      launchDate: "15.05.2011",
      konamiTournamentLegalDate: "15.05.2011",
      cardsPerPack: "40",
      size: "123",
      isActive: "1",
      categoryId: "1",
      shortDescription: "spellcaster deck",
      inStock: "1",
      quantity: "450",
      onSalePercent: "10",
      dateAdded: "14/05/2011",
      photo1Base64: 'assets/Images/tile-image-mock.jpg',
      photo2Base64: '',
      photo3Base64: '',
      photo4Base64: '',
      photo5Base64: ''
    },
    {
      id: "3",
      name: "Structure Deck: Saga of the blue eyes",
      description: "Contains 40 spellcasters",
      price: "25.00",
      type: "Structure Deck",
      tournamentStoreLaunchDate: "15.05.2012",
      launchDate: "15.05.2012",
      konamiTournamentLegalDate: "15.05.2012",
      cardsPerPack: "40",
      size: "123",
      isActive: "1",
      categoryId: "2",
      shortDescription: "spellcaster deck",
      inStock: "1",
      quantity: "450",
      onSalePercent: "0",
      dateAdded: "11/01/2012",
      photo1Base64: 'assets/Images/tile-image-mock.jpg',
      photo2Base64: '',
      photo3Base64: '',
      photo4Base64: '',
      photo5Base64: ''
    },
    {
      id: "4",
      name: "Structure Deck: zombie horde",
      description: "Contains 40 zombies",
      price: "25.00",
      type: "Structure Deck",
      tournamentStoreLaunchDate: "11.05.2011",
      launchDate: "11.05.2011",
      konamiTournamentLegalDate: "11.05.2011",
      cardsPerPack: "40",
      size: "123",
      isActive: "1",
      categoryId: "2",
      shortDescription: "zombie deck",
      inStock: "1",
      quantity: "450",
      onSalePercent: "10",
      dateAdded: "03/05/2012",
      photo1Base64: 'assets/Images/tile-image-mock.jpg',
      photo2Base64: '',
      photo3Base64: '',
      photo4Base64: '',
      photo5Base64: ''
    },{
      id: "5",
      name: "Structure Deck: Order Of the Spellcasters",
      description: "Contains 40 spellcasters",
      price: "25.00",
      type: "Structure Deck",
      tournamentStoreLaunchDate: "15/05/2011",
      launchDate: "15.05.2011",
      konamiTournamentLegalDate: "15.05.2011",
      cardsPerPack: "40",
      size: "123",
      isActive: "123",
      categoryId: "1",
      shortDescription: "spellcaster deck",
      inStock: "1",
      quantity: "450",
      onSalePercent: "0",
      dateAdded: "11/05/2011",
      photo1Base64: 'assets/Images/tile-image-mock.jpg',
      photo2Base64: '',
      photo3Base64: '',
      photo4Base64: '',
      photo5Base64: ''
    },
    {
      id: "6",
      name: "Structure Deck: Soulburner",
      description: "Contains 40 cyberse",
      price: "25.00",
      type: "Structure Deck",
      tournamentStoreLaunchDate: "15.05.2011",
      launchDate: "15.05.2011",
      konamiTournamentLegalDate: "15.05.2011",
      cardsPerPack: "40",
      size: "123",
      isActive: "1",
      categoryId: "1",
      shortDescription: "spellcaster deck",
      inStock: "1",
      quantity: "450",
      onSalePercent: "10",
      dateAdded: "14/05/2011",
      photo1Base64: 'assets/Images/tile-image-mock.jpg',
      photo2Base64: '',
      photo3Base64: '',
      photo4Base64: '',
      photo5Base64: ''
    },
    {
      id: "7",
      name: "Structure Deck: Saga of the blue eyes",
      description: "Contains 40 spellcasters",
      price: "25.00",
      type: "Structure Deck",
      tournamentStoreLaunchDate: "15.05.2012",
      launchDate: "15.05.2012",
      konamiTournamentLegalDate: "15.05.2012",
      cardsPerPack: "40",
      size: "123",
      isActive: "1",
      categoryId: "2",
      shortDescription: "spellcaster deck",
      inStock: "1",
      quantity: "450",
      onSalePercent: "0",
      dateAdded: "11/01/2012",
      photo1Base64: 'assets/Images/tile-image-mock.jpg',
      photo2Base64: '',
      photo3Base64: '',
      photo4Base64: '',
      photo5Base64: ''
    },
    {
      id: "8",
      name: "Starter Deck: zombie horde",
      description: "Contains 40 zombies",
      price: "15.00",
      type: "Starter Deck",
      tournamentStoreLaunchDate: "11.05.2011",
      launchDate: "11.05.2011",
      konamiTournamentLegalDate: "11.05.2011",
      cardsPerPack: "40",
      size: "123",
      isActive: "1",
      categoryId: "2",
      shortDescription: "zombie deck",
      inStock: "1",
      quantity: "450",
      onSalePercent: "10",
      dateAdded: "03/05/2012",
      photo1Base64: 'assets/Images/tile-image-mock.jpg',
      photo2Base64: '',
      photo3Base64: '',
      photo4Base64: '',
      photo5Base64: ''
    }
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }

  getOnSaleProducts() {
    return this.products.filter(function(product) {
      return Number(product.onSalePercent) > 0;
    });
  }

  getNewProducts() {
    return this.products.filter(function(product) {
      const d1 = new Date();
      const d2 = new Date(product.dateAdded);
      return (d1.getMonth() - d2.getMonth()) <= 1 && d1.getFullYear() === d2.getFullYear();
    });
  }
}
