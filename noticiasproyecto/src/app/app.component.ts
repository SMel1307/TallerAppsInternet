import { Component, OnInit } from '@angular/core';
import { NoticiaService } from './services/noticia.service';
import { DigimonServices } from './components/digimon/digimon.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listNoticias: any[] = [];
 
  digimones:any;

 
  loading = false;
  constructor(private _noticiaService: NoticiaService, public digimon:DigimonServices){

  }


  buscarNoticias(parametros: any){
    this.loading = true;
    this.listNoticias = [];
    setTimeout(() => {
      this._noticiaService.getNoticias(parametros).subscribe(data => {
        this.loading = false
        this.listNoticias = data.articles;
      }, error =>{
        console.log(error);
        this.loading =  false;
      })
    },1000);
  }
/*ngOnInit(){
  this.digimones.getDigimon().subscribe(
    (r) => { this.digimones = r; console.log(r)},
    (e) => {console.error(e)}
  )}*/
 
 
  
  

}
