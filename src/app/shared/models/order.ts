import { formatDate } from '@angular/common';
import { Product } from './product';

export class Order {
    id: number;
    userId: number;
    name: string;
    address: string;
    date: string;
    phone: string;
    total: number;
    products: Array<Product>;
    showProducts: boolean;
    status: string;
}
