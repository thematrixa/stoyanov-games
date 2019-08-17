import { Category } from './category';

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    tournamentStoreLaunchDate: Date;
    launchDate: Date;
    konamiTournamentLegalDate: Date;
    cardsPerPack: number;
    isActive: boolean = false;
    category: Category;
    shortDescription: string;
    inStock: boolean = false;
    quantity: number;
    onSalePercent: number;
    dateAdded: Date;
    five_stars: number;
    four_stars: number;
    three_stars: number;
    two_stars: number;
    one_stars: number;
    rating: number;
    photo1Base64: string;
    photo2Base64: string;
    photo3Base64: string;
    photo4Base64: string;
    photo5Base64: string;

}
