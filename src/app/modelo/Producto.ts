export class Producto {
    categoryId: number;
    title: string;
    price: number;
    description: string;
    images:string[];

    constructor(categoryId:number, title: string, price: number, description: string, images:string[]) {
        this.categoryId = categoryId
        this.title = title;
        this.price = price;
        this.description = description;
        this.images = images;
    }
}