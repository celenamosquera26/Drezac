import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/Producto';
import { ConexionService } from 'src/app/Servicio/conexion.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  datosUsuario:FormGroup
  constructor(private fb: FormBuilder, private router:Router, private drezac:ConexionService){
    this.datosUsuario = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required]
    })
  }
  EnviarDatos(){
    const datos: Producto = {
      title: this.datosUsuario.get('title')!.value,
      price: this.datosUsuario.get('price')!.value,
      description: this.datosUsuario.get('description')!.value,
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1920px-Eiche_bei_Graditz.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1920px-Eiche_bei_Graditz.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1920px-Eiche_bei_Graditz.jpg"]
    };
    //Al parecer es necesario poner más de una URL para que la api lo detecte como un array, miren el comentario de abajo, es importante
    console.log(datos)
    this.drezac.postProduct(datos).subscribe((data:any)=> {
      //Cuando ustedes ponen campos en el fomulario post, en consola, saldrán los datos
      console.log(data)//En este sacara todo el array de datos
      console.log(data.id)//En este se mostrará únicamente la id del nuevo producto
      //Los dos salen en consola de  http://localhost:4200/enviardatos, así se llamó la ruta
      //Es IMPORTANTE que vean en consola el número que sale en http://localhost:4200/enviardatos cuando le dan a enviar datos
      //Ese número es el id del nuevo producto, cuando lo tengan, pongan: https://api.escuelajs.co/api/v1/products/numeroDelProducto
      //Si en consola les sale 50, entonces deben poner https://api.escuelajs.co/api/v1/products/50
      //Eso les mostrará la información del producto con la id 50, esto es un ejemplo
      //Vayan a conexion.service.ts a partir de la línea 10
    })
  }
}
