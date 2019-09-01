import { formatDate } from '@angular/common';
import { Product } from './product';
import { CartItem } from './cart-item';
import { User } from './user';

export class Order {
    id: number;
    user: User;
    name: string;
    address: string;
    date: string;
    phone: string;
    total: number;
    cartItems: Array<CartItem>;
    showProducts: boolean;
    status: string;
}
