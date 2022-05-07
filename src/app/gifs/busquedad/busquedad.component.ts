import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsSService } from '../service/gifs-s.service';

@Component({
  selector: 'app-busquedad',
  templateUrl: './busquedad.component.html',
  
})
export class BusquedadComponent  {
// este decorador es para poder observar los cambios que se realizan en el DOM
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsServ:GifsSService){}

  buscar(){
    
   const de= this.txtBuscar.nativeElement.value;
   console.log(de);
   this.gifsServ.buscarGifs(de)

   this.txtBuscar.nativeElement.value =''

  }

}
