export class Producto {
    title: string;
    price: number;
    description: string;
    categoryId: number;
    images: string[];
  
    constructor(title: string, price: number, description: string, categoryId: number, images: string[]) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.categoryId = categoryId;
      this.images = images;
    }
}
  