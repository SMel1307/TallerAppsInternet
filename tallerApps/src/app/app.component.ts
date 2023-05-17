import { Component } from '@angular/core';
import { Producto, Usuario } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'tallerApps';
  nombre = 'Melissa Lucero';
  resultado = 4 + 6;
  botonDes= false;
  persona = {
    nombre: "Royer Marcelo",
    edad: 25
  }
  usuario: Usuario = {
    correo: "aaa@gmail.com",
    contrasena: "112454"
  }
  listaNombres : string [] = ['Gabo','Royer','Elias','Melissa'];
  nuevoNombre = '';
  productos: Producto[] = [
    {nombre: 'Laptop Dell', precio: 4500, saldo: 10},
    {nombre: 'Laptop ASUS', precio: 5000}
  ]
  accionBoton(){
    this.botonDes = !this.botonDes;
  }
  incrementarEdad(){
    this.persona.edad +=1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element);
  }

  cambiarNombre(event : Event){
    
    const element = event.target as HTMLInputElement;
    this.persona.nombre = element.value;
  }
  agregarPersona(){
    this.listaNombres.push(this.nuevoNombre);
  }
  eliminarPersona(index: number){
    this.listaNombres.splice(index,1);
  }
  registrar(){
    console.log(this.usuario);
    
  }

}

