import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenComponent } from './componentes/imagen/imagen.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './componentes/productos/productos.component';
import { DigimonComponent } from './componentes/digimon/digimon.component';
import { DigimonServices } from './componentes/digimon/digimon.service';
@NgModule({
  declarations: [
    AppComponent,
    ImagenComponent,
    ProductosComponent,
    DigimonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DigimonServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
