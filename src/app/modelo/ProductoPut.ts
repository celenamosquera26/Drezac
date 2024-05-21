export class ProductPut {
    id:number;
    title: string;
    price: number;
    images:string[];

    constructor(id:number,title: string, price: number, images:string[]) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.images = images
    }
}