import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelo/Producto';
import { ProductPut } from '../modelo/ProductoPut';
@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  URL = 'https://api.escuelajs.co/api/v1';
  datos:any
  constructor(private Vestido:HttpClient) {}
  //¿Ya vieron los comentarios de post.component.ts a partir de la línea 29?, si es así vean lo que puse a continuación, (Lo de la linea 17 y 18 sí lo pueden leer)
getRopaParaDormir(){
  /*
  Si ya crearon un producto y usaron la URL que puse y definitivamente les salió un texto con la información que pusieron, entonces felicidades, el producto sí existe
  Pero hay que encontrarlo y deben ajustar el número que está despues del =
  Tienen que ir al final de toda la información de la api 
  */
  //Hablo de este número                               |
  //                                                   v
  return this.Vestido.get(`${this.URL}/products?offset=100&limit=20`);
  /*
  Aumenten el número hasta que lleguen al final, si al copilar no aparece ningún producto es porque se pasaron demasiado y deben bajarle un poco, el 50 en mi caso
  aparece el producto que cree, pero solo en mi caso, estoy un 99.99% que no aparecerá para ustedes, primero creen el producto y busquenlo
  */
  
}

postElaborar(product:Producto){
  /*
  El error se daba por culpa de  images y category, images lo explico en post.component.ts, category debe tener un valor que existe en la api,
  no estoy muy seguro cuál es el valor máximo, pero cuando creen un producto en el formulario post en el campo de category pongan números pequeños como 5
  */
 console.log(product)
  return this.Vestido.post(`${this.URL}/products`, product);
}

deleteProduct(product: Producto, id:number){
  return this.Vestido.delete(`${this.URL}/products/${id}`)
}

putProduct(title:string, price: number, id:number){
  this.datos = {
      title: title,
      price: price
  }
  
  console.log(id)
  console.log(`${this.URL}/products/${id}`)
  return this.Vestido.put(`${this.URL}/products/${id}`, this.datos)
}



}



