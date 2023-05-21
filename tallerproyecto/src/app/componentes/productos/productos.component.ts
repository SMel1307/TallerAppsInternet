import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { ComidaResult } from 'src/app/models/comida.model';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'componente-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  producto: Producto = {
    nombre: 'Producto test',
    precio: 1000
  }
 /*productos : Producto[]=[
   // {
      nombre: 'Producto test 1',
      precio: 2000
    },
    {
      nombre: 'Producto test 2',
      precio: 3000
    },
    {
      nombre: 'Producto test 3',
      precio: 4000
    },
    {
      nombre: 'Producto test 4',
      precio: 5000
    }
  ]*/
misproductos: Producto [] = [

];
miscomidas : ComidaResult;

constructor(private productoServicio: ProductoService) {
  
  this.misproductos = [] ;
  this.miscomidas = new ComidaResult;

}
/*ngOnChanges(){

}*/
ngOnInit(): void{

}/*
ngAfterViewInit(){

}*/
agregarProducto(){
  this.productoServicio.agregarProducto(this.producto);
console.log("agregado", this.producto);
}
verProducto(){
  this.misproductos= this.productoServicio.getproducto();
  console.log(this.misproductos);
}
verComida(){
   this.productoServicio.getComida()
 .subscribe(comida => this.miscomidas = comida); 

 
}
}
