import { Address } from './address';

export class User {
    id: number;
    username: string;
    password: string;
    email: string;
    addresses: Array<Address> = [];
    phone: string;
    isEmailConfirmed: Boolean;
    name: string;
    isAdmin: boolean;
}
      