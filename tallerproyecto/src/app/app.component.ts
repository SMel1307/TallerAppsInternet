import { Component, OnInit } from '@angular/core';
import { DigimonServices } from './componentes/digimon/digimon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'tallerproyecto';
  imgParent =  'https://i.blogs.es/ceda9c/dalle/1024_2000.jpg';
  imgCargar(){
    console.log("error padres");
  }*/
  digimones:any;
  constructor(public digimon:DigimonServices){}
  ngOnInit(){
    this.digimon.getDigimon().subscribe(
      (r) => { this.digimones = r; console.log(r)},
      (e) => {console.error(e)}
      )
    }

}
