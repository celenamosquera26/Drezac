export class Producto {
    title: string;
    price: number;
    description: string;
    images: string[];
  
    constructor(title: string, price: number, description: string, images: string[]) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.images = images;
    }
}
  