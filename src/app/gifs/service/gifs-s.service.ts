import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsSearch } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsSService {

  private apiG: string = 'waQflhU13pqVsprFHjN0ql7ifxkqH6iV';
  private servicioUrl = 'https://api.giphy.com/v1/gifs'
  private _history: string[] = [];

  public resul: Gif[] = [];


  get history(){
    
    return [...this._history];
    //usamos el operador spread(..._varibable) para romper la diferencias, para regresar a un nuevo arreglo  
    // 
  };


  constructor(private http:HttpClient){
    //primera forma este es el historial
    this._history = JSON.parse(localStorage.getItem('historial')!)  || [];
    //aqui ira el resultado final q cuando se recargue la pagina veremos el ultimo resultado
    this.resul =JSON.parse(localStorage.getItem('resultados')!)  || [];

   
    //dos formas 
    // if(localStorage.getItem('historial')){
    //   this._history = JSON.parse(localStorage.getItem('historial')!);
    // }jjjjjj
  }
//obligamos a q metan algo en el buscador
  buscarGifs(query: string =''){
    query=query.trim().toLocaleLowerCase();

    if ( !this._history.includes(query)){

      this._history.unshift(query);
      this._history = this.history.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._history));//esto es para guardar en el localStore elhistorial

    }; 

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=waQflhU13pqVsprFHjN0ql7ifxkqH6iV&q=messi got&limit=10')
    //   .then(resp =>{
    //     resp.json().then(data => console.log(data))
    //   }) esta es una opcion pero se usara el HttpClienModule
    
    console.log(this._history);
    const params= new HttpParams()
      .set('api_key',this.apiG)
      .set('limit','10')
      .set('q',query);

      console.log(params.toString)
    this.http.get<GifsSearch>(`${this.servicioUrl}/search`, { params })
      .subscribe((resp)=>{
        console.log(resp.data)
        this.resul = resp.data;
        localStorage.setItem('resultados',JSON.stringify(this.resul))
      });

  };


}
