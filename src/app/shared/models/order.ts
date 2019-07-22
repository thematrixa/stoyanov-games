import { formatDate } from '@angular/common';
import { Product } from './product';
import { CartItem } from './cart-item';

export class Order {
    id: number;
    userId: number;
    name: string;
    address: string;
    date: string;
    phone: string;
    total: number;
    cartItems: Array<CartItem>;
    showProducts: boolean;
    status: string;
}
