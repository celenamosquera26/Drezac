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
    categoryId: ['', Validators.required],
    images: ['', Validators.required],
  })
}
//Hace algo cuando se carga la página
ngOnInit(): void {
  //Cuando la página carga obtiene todos los productos
    this.ConexionService.getRopaParaDormir().subscribe((data: any) => {
      //El resultado de todo eso es un array que se guarda en la variable
      //info es un array
      data.map((item: any) => {


        let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string
        
        
        let imageNoGarbage = imageStringify
        
        
        .substring(2, imageStringify.length - 2)
        
        
        .replaceAll('\\', ' ')
        
        
        .replaceAll('""', '"')
        
        
        .replaceAll('" "', '"')
        
        
        .replaceAll(' ', '');
        
        
        try {
        
        
        item.images = JSON.parse(imageNoGarbage);
        
        
        item.imagesActual = item.images[0];
        
        
        } catch (e) {}
        
        
        });

      this.info=data
      console.log(this.info)
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
    images: [this.datosCrear.get('images')!.value],
  };
  this.ConexionService.postElaborar(datos).subscribe(data => {
    //Recarga la página cuando el método finaliza
    location.reload()
  })
}

eliminarProducto(id:number){
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
    title: product.title,
    price:product.price,
    images: product.images
  });
  console.log(this.datosProducto)
}

editarProducto(id:number){
  this.ConexionService.putProduct(this.datosProducto.value.title, this.datosProducto.value.price,this.datosProducto.value.images,id).subscribe(data => {
    console.log(data)
    location.reload()
  })
}

}
