import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'componente-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {
 @Input() imagen : string = 'no image';
 @Output() cargar = new EventEmitter();
 imagenDefecto: string = "https://i.blogs.es/ceda9c/dalle/1024_2000.jpg";
 imgError(){
  this.imagen = this.imagenDefecto;
  this.cargar.emit();

 }
}

