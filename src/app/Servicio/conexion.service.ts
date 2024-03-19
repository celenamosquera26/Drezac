import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelo/Producto';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  URL = 'https://api.escuelajs.co/api/v1';
  constructor(private Vestido:HttpClient) {}
getRopaParaDormir(){
  return this.Vestido.get(`${this.URL}/products?offset=35&limit=20`)
}

postElaborar(product:Producto){
  console.log(product)
  console.log(product.images)
  return this.Vestido.post(`${this.URL}/products/`, product);
}

}

