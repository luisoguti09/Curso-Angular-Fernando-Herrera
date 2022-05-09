import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

   heroes: string[] = ['Batman ', 'Flash ', 'La Mujer Maravilla', 'DeadPool']; 
   heroeBorrado: string = ' ';
   borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || ' ';
     

    //console.log('Borrando...');
   }

  /*constructor() { 
    console.log('constructor');
    implements OnInit
  }

  ngOnInit(): void {
    console.log('NgOnInit()');
  }*/

}
