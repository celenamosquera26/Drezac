import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  URL = 'https://api.escuelajs.co/api/v1';
  constructor(private Vestido:HttpClient) {}
getRopaParaDormir(){
  return this.Vestido.get(`${this.URL}/products?offset=35&limit=20`)
}
}

