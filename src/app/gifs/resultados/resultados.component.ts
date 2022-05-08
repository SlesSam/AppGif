import { Component } from '@angular/core';
import { GifsSService } from '../service/gifs-s.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  get resul(){
    return this.gif.resul;
  }

  constructor(private gif: GifsSService) { }


}
// localStore
/*
difeencia entre localStore sesion y local esque en la session se borra cuando se termina de usar el navegador
y que local se guarda todo aunque se cierre el navegador

*/ 