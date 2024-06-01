import { Component } from '@angular/core';
import { ConexionService } from 'src/app/Servicio/conexion.service';
import { OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/Producto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-pijama',
  templateUrl: './pijama.component.html',
  styleUrls: ['./pijama.component.css']
})
export class PijamaComponent implements OnInit {
  info:any
  datosProducto:FormGroup
  datosCrear:FormGroup
  mostrarEdicion:boolean = false
  productoSeleccionado:any
  datos:any
constructor(private ConexionService:ConexionService, private fb: FormBuilder){
  //Estos datos inicializan el formulario
  this.datosProducto = this.fb.group({
    title: ['', Validators.required],
    price: ['', Validators.required],
    images: ['', Validators.required],
  })
  this.datosCrear = this.fb.group({
    title: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    images: ['', Validators.required],
  })
}
//Hace algo cuando se carga la página
ngOnInit(): void {
    this.ConexionService.getRopaParaDormir().subscribe(data => {
      console.log("esto trajo node", data)
      this.info = data
    })
}


crearProducto(){
  const datos: Producto = {
    title: this.datosCrear.get('title')!.value,
    price: this.datosCrear.get('price')!.value,
    description: this.datosCrear.get('description')!.value,
    images: [this.datosCrear.get('images')!.value],
  };
  console.log(datos)
  this.ConexionService.postProduct(datos).subscribe(data => {
    //Recarga la página cuando el método finaliza
    if(data == 'ok'){
      location.reload()
    }
  })
}

eliminarProducto(id:number){
  console.log(id)
  
  try{
    this.ConexionService.deleteProduct(id).subscribe(data => {
      location.reload()
    })
  }
  catch(err){
    console.log('Error al eliminar el producto: ', err)
  }

}

abrirEdicion(product:any){
  this.productoSeleccionado = product
  //patch value es crear un formualrio temporalmente
  //Se crear el formulario y los valores que se seleccionan se ponen en los inputs
  this.datosProducto.patchValue({
    title: product.TITULO,
    price:product.PRECIO,
    images: product.imagen
  });
}

editarProducto(id:number){
  console.log(this.datosProducto.value.title, this.datosProducto.value.price,this.datosProducto.value.images,id)
  this.ConexionService.putProduct(this.datosProducto.value.title, this.datosProducto.value.price,this.datosProducto.value.images,id).subscribe(data => {
    console.log(data)
    if(data = 'ok'){
      location.reload()
    }
  })
}

}
