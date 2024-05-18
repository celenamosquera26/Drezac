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
  this.datosProducto = this.fb.group({
    title: ['', Validators.required],
    price: ['', Validators.required],
    images: ['', Validators.required],
  })
  this.datosCrear = this.fb.group({
    title: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    categoryId: ['', Validators.required],
    images: ['', Validators.required],
  })
}
ngOnInit(): void {
    this.ConexionService.getRopaParaDormir().subscribe(data => {
      this.info=data
      //Info tiene el array de la informacion de toda la api, necesito que cada valor se le asigne directamnte en editarProducto para que los form se rellenen con sus valores
      //Es decir que si unproducto tiene precio 100 y titulo algo, en el formualrio debe aparecer titulo:algo precio:100
    })
}


crearProducto(){
  const datos: Producto = {
    title: this.datosCrear.get('title')!.value,
    price: this.datosCrear.get('price')!.value,
    description: this.datosCrear.get('description')!.value,
    categoryId: this.datosCrear.get('categoryId')!.value,
    images: ["https://i.imgur.com/R2PN9Wq.jpeg"]
  };
  this.ConexionService.postElaborar(datos).subscribe(data => {
    location.reload()

  })
}

eliminarProducto(producto:Producto,id:number){
  try{
    this.ConexionService.deleteProduct(producto, id).subscribe(data => {
      location.reload()
    })
  }
  catch(err){
    console.log('Error al eliminar el producto: ', err)
  }

}

abrirEdicion(product:any){
  this.productoSeleccionado = product
  this.datosProducto.patchValue({
    title: product.title,
    price:product.price,
    images: ["https://i.imgur.com/R2PN9Wq.jpeg"]
  });
}

editarProducto(id:number){
  console.log(id)
  this.ConexionService.putProduct(this.datosProducto.value.title, this.datosProducto.value.price,this.datosProducto.value.images,id).subscribe(data => {
    console.log(data)
    location.reload()
  })
}

}
