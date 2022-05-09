import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';





@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {


  cambiarNombre( event: any){
    console.log(event);
  }

  nuevo: Personaje = {
    nombre: 'Piccolo',
    poder : 3000

  }
 /* get personajes(): Personaje[]{
    return this.dbzservice.personajes;
  }

  agregarNuevoPersonaje(arg: Personaje){
    
    this.personajes.push( arg );
  }*/
  
  
  constructor(){}


 

  
}