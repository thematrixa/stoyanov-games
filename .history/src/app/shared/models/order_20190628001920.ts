import { formatDate } from '@angular/common';
import { Product } from './product';

export class Order {
    id: string;
    userId: number;
    name: string;
    address: string;
    date: string;
    phone: string;
    total: string;
    products: Array<Product>;
    showProducts: boolean;
}
