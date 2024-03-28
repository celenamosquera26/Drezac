import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionService } from 'src/app/Servicio/conexion.service';
import { ProductPut } from 'src/app/modelo/ProductoPut';
@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent {
  datosUsuario:FormGroup
  constructor(private fb: FormBuilder, private router:Router, private drezac:ConexionService){
    this.datosUsuario = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
    })
  }
  EnviarDatos(){
    const datos: ProductPut = {
      id: this.datosUsuario.get('id')!.value,
      title: this.datosUsuario.get('title')!.value,
      price: this.datosUsuario.get('price')!.value,
    };
    console.log(datos)
    console.log(datos.id)
    this.drezac.putProduct(datos.title, datos.price, datos.id).subscribe(data => {
      console.log(data)
    })
  }
}


