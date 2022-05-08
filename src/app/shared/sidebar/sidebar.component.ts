import { Component} from '@angular/core';
import { GifsSService } from 'src/app/gifs/service/gifs-s.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent  {

  constructor(private gifS:GifsSService) { }

  get history(){
    return this.gifS.history;
  }

 buscar(i:string){
   console.log(i)
  this.gifS.buscarGifs(i)
 }
}
