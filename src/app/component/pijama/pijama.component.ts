import { Component } from '@angular/core';
import { ConexionService } from 'src/app/Servicio/conexion.service';
import { OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/Producto';
@Component({
  selector: 'app-pijama',
  templateUrl: './pijama.component.html',
  styleUrls: ['./pijama.component.css']
})
export class PijamaComponent implements OnInit {
  info:any
constructor(private ConexionService:ConexionService){}
ngOnInit(): void {

    this.ConexionService.getRopaParaDormir().subscribe(data => {
      console.log(data)
      console.log(data)
      this.info=data
      console.log(this.info)
    })
}

eliminarProducto(producto:Producto,id:number){
  try{
    this.ConexionService.deleteProduct(producto, id).subscribe(data => {
      console.log(data)
      location.reload()
    })
  }
  catch(err){
    console.log('Error al eliminar el producto: ', err)
  }

}

}
