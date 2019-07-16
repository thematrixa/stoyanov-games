import { FormGroup } from '@angular/forms';
import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { toInt } from 'ngx-bootstrap/chronos/utils/type-checks';
import { DateFormatPipe } from '../pipes/date-format-pipe';

@Injectable()
export class ProductService {
  products: Array<Product> = [];
  /* {
     id: "1",
     name: "Structure Deck: Order Of the Spellcasters",
     description: "Contains 40 spellcasters",
     price: "25.00",
     type: "Structure Deck",
     tournamentStoreLaunchDate: "15.05.2011",
     launchDate: "15.05.2011",
     konamiTournamentLegalDate: "15.05.2011",
     cardsPerPack: 40,
     size: "123",
     isActive: "123",
     categoryId: "1",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "0",
     dateAdded: "11.05.2011",
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
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "1",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "10",
     dateAdded: "14.05.2011",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "3",
     name: "Starter Deck: Saga of the blue eyes",
     description: "Contains 40 spellcasters",
     price: "25.00",
     type: "Starter Deck",
     tournamentStoreLaunchDate: "15.05.2012",
     launchDate: "15.05.2012",
     konamiTournamentLegalDate: "15.05.2012",
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "2",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "0",
     dateAdded: "11.01.2012",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "4",
     name: "Starter Deck: zombie horde",
     description: "Contains 40 zombies",
     price: "25.00",
     type: "Starter Deck",
     tournamentStoreLaunchDate: "11.05.2011",
     launchDate: "11.05.2011",
     konamiTournamentLegalDate: "11.05.2011",
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "2",
     shortDescription: "zombie deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "10",
     dateAdded: "03.05.2012",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },{
     id: "5",
     name: "Structure Deck: Infinity Chasers",
     description: "Contains 40 spellcasters",
     price: "25.00",
     type: "Structure Deck",
     tournamentStoreLaunchDate: "15.05.2011",
     launchDate: "15.05.2011",
     konamiTournamentLegalDate: "15.05.2011",
     cardsPerPack: 40,
     size: "123",
     isActive: "123",
     categoryId: "1",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "0",
     dateAdded: "11.05.2011",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "6",
     name: "Structure Deck: Legendary Hero",
     description: "Contains 40 cyberse",
     price: "25.00",
     type: "Structure Deck",
     tournamentStoreLaunchDate: "15.05.2011",
     launchDate: "15.05.2011",
     konamiTournamentLegalDate: "15.05.2011",
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "1",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "10",
     dateAdded: "14.05.2011",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "7",
     name: "Starter Deck: Hero Strike",
     description: "Contains 40 spellcasters",
     price: "25.00",
     type: "Starter Deck",
     tournamentStoreLaunchDate: "15.05.2012",
     launchDate: "15.05.2012",
     konamiTournamentLegalDate: "15.05.2012",
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "2",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "0",
     dateAdded: "11.01.2012",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "8",
     name: "Starter Deck: Neos Force",
     description: "Contains 40 zombies",
     price: "15.00",
     type: "Starter Deck",
     tournamentStoreLaunchDate: "11.05.2011",
     launchDate: "11.05.2011",
     konamiTournamentLegalDate: "11.05.2011",
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "2",
     shortDescription: "zombie deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "10",
     dateAdded: "03.05.2012",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "1",
     name: "Structure Deck: Crystal Emergency",
     description: "Contains 40 spellcasters",
     price: "25.00",
     type: "Structure Deck",
     tournamentStoreLaunchDate: "15.05.2011",
     launchDate: "15.05.2011",
     konamiTournamentLegalDate: "15.05.2011",
     cardsPerPack: 40,
     size: "123",
     isActive: "123",
     categoryId: "1",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "0",
     dateAdded: "11.05.2011",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "2",
     name: "Structure Deck: World of Warcraft",
     description: "Contains 40 cyberse",
     price: "25.00",
     type: "Structure Deck",
     tournamentStoreLaunchDate: "15.05.2011",
     launchDate: "15.05.2011",
     konamiTournamentLegalDate: "15.05.2011",
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "1",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "10",
     dateAdded: "14.05.2011",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "3",
     name: "Starter Deck: Spiderman",
     description: "Contains 40 spellcasters",
     price: "25.00",
     type: "Starter Deck",
     tournamentStoreLaunchDate: "15.05.2012",
     launchDate: "15.05.2012",
     konamiTournamentLegalDate: "15.05.2012",
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "2",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "0",
     dateAdded: "11.01.2012",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "4",
     name: "Starter Deck: Attack From Hell",
     description: "Contains 40 zombies",
     price: "25.00",
     type: "Starter Deck",
     tournamentStoreLaunchDate: "11.05.2011",
     launchDate: "11.05.2011",
     konamiTournamentLegalDate: "11.05.2011",
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "2",
     shortDescription: "zombie deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "10",
     dateAdded: "03.05.2012",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },{
     id: "5",
     name: "Structure Deck: Hidden City",
     description: "Contains 40 spellcasters",
     price: "25.00",
     type: "Structure Deck",
     tournamentStoreLaunchDate: "15.05.2011",
     launchDate: "15.05.2011",
     konamiTournamentLegalDate: "15.05.2011",
     cardsPerPack: 40,
     size: "123",
     isActive: "123",
     categoryId: "1",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "0",
     dateAdded: "11.05.2011",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "6",
     name: "Structure Deck: Rokket Barrage",
     description: "Contains 40 cyberse",
     price: "25.00",
     type: "Structure Deck",
     tournamentStoreLaunchDate: "15.05.2011",
     launchDate: "15.05.2011",
     konamiTournamentLegalDate: "15.05.2011",
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "1",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "10",
     dateAdded: "14.05.2011",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "7",
     name: "Starter Deck: Joey the passion",
     description: "Contains 40 spellcasters",
     price: "25.01",
     type: "Starter Deck",
     tournamentStoreLaunchDate: "15.05.2012",
     launchDate: "15.05.2012",
     konamiTournamentLegalDate: "15.05.2012",
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "2",
     shortDescription: "spellcaster deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "0",
     dateAdded: "11.01.2012",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   },
   {
     id: "8",
     name: "Starter Deck: Kaiba's Revenge",
     description: "Contains 40 zombies",
     price: "15.00",
     type: "Starter Deck",
     tournamentStoreLaunchDate: "11.05.2011",
     launchDate: "11.05.2011",
     konamiTournamentLegalDate: "11.05.2011",
     cardsPerPack: 40,
     size: "123",
     isActive: "1",
     categoryId: "2",
     shortDescription: "zombie deck",
     inStock: 1,
     quantity: "450",
     onSalePercent: "10",
     dateAdded: "03.05.2012",
     photo1Base64: 'assets/Images/tile-image-mock.jpg',
     photo2Base64: '',
     photo3Base64: '',
     photo4Base64: '',
     photo5Base64: ''
   }
 ];
*/
  constructor(private dateFormatter: DateFormatPipe) { }

  getProducts() {
    return this.products;
  }

  getOnSaleProducts() {
    return this.products.filter(function (product) {
      return Number(product.onSalePercent) > 0;
    });
  }

  getNewProducts() {
    return this.products.filter(function (product) {
      const d1 = new Date();
      const d2 = new Date(product.dateAdded);
      return (d1.getMonth() - d2.getMonth()) <= 1 && d1.getFullYear() === d2.getFullYear();
    });
  }

  generateProductFromForm(form: FormGroup): Product {
    let formData = form.getRawValue();
    let product = new Product();
    product.cardsPerPack = parseInt(formData.cardsPerPack);
    product.categoryId = parseInt(formData.categoryId);
    product.onSalePercent = parseInt(formData.onSalePercent);
    product.price = parseFloat(formData.price);
    product.quantity = parseInt(formData.quantity);
    product.description = formData.description;
    product.inStock = formData.inStock;
    product.isActive = formData.isActive;
    product.konamiTournamentLegalDate = formData.konamiTournamentLegalDate;
    product.launchDate = formData.launchDate;
    product.name = formData.name;
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
}
