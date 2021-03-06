import { Product } from './product';

export class UnconfirmedOrder {
    id: string;
    name: string;
    address: string;
    date: string;
    phone: string;
    total: string;
    products: Array<Product>;
}
