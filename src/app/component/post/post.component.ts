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
      categoryId: this.datosUsuario.get('categoryId')!.value,
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1920px-Eiche_bei_Graditz.jpg"]
    };
    console.log(datos)
    this.drezac.postElaborar(datos).subscribe((data:any)=> {
      console.log(data)
    })
  }
}
