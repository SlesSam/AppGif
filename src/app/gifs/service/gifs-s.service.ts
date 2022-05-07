import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsSService {

  private _history: string[]=[];


  get history(){
    
    return [...this._history];
    //usamos el operador spread(..._varibable) para romper la diferencias, para regresar a un nuevo arreglo  
    // 
  }
//obligamos a q metan algo en el buscador
  buscarGifs(query: string =''){
    query=query.trim().toLocaleLowerCase();

    if (!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this.history.splice(0,10);
    }
    
    console.log(this._history)

  }


}
