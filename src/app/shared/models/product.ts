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
    size: string;
    isActive: number;
    category: Category;
    shortDescription: string;
    inStock: number;
    quantity: number;
    onSalePercent: number;
    dateAdded: Date;
    photo1Base64: string;
    photo2Base64: string;
    photo3Base64: string;
    photo4Base64: string;
    photo5Base64: string;

}
