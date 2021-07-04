import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  heroes: string[] = ['Deku','Kacchan','Shoto','Tenya '];
  heroeBorrado: string = '' ;
  
  borrandoHeroe() {
    
     this.heroeBorrado = this.heroes.shift() || '';
    console.log("borrando...");
  }
}
