import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedadComponent } from './busquedad/busquedad.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedadComponent,
    ResultadosComponent
  ],
  
  exports:[
    GifsPageComponent
  ],

  imports: [
    CommonModule
  ]
})
export class GifsModule { }
