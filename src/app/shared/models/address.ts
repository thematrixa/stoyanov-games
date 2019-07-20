export class Address {
    id: number;
    name: string = "";
    isValid: boolean = true;

    constructor(name: string){
        this.name = name;
    }
}