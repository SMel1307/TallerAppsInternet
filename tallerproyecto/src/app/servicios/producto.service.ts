import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { HttpClient } from '@angular/common/http';
import { ComidaResult } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto [] = [];
  constructor(private http: HttpClient) { }
  agregarProducto(producto: Producto){
    this.productos.push(producto);
    console.log("producto agregado", producto);
  }
  getproducto(){
    return this.productos;
    //console.log("get devolver productos",this.productos);
  }
  getComida(){
    return this.http.get<ComidaResult>('https://api.escuelajs.co/api/v1/products');
  }

}
