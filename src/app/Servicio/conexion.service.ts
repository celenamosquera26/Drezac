import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelo/Producto';
import { environment } from '../Environment/environment.develop';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  host:string = ''
  dataDelete:any
  datos:any
  constructor(private Vestido:HttpClient) {
    this.host = environment.endpoint
  }

postProduct(product:Producto){
  //Se tiene que enviar como un json
  let data = {
    product:product
  }
  return this.Vestido.post(this.host + `/postProduct`, data.product);
}

deleteProduct(id:number){
  return this.Vestido.delete(this.host + '/deleteProduct', {body:{id:id}})
}

putProduct(title:string, price: number, images:string[], id:number){
  this.datos = {
    title:title,
    price:price,
    images:images,
    id:id
  }
  return this.Vestido.put(this.host + '/putProduct', this.datos)
}

getRopaParaDormir(): Observable<any>{
  return this.Vestido.get(this.host + '/conexion')
}


}



