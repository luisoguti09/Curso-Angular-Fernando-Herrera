import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CuenteadorComponent } from './cuenteador.component';



@NgModule({
    declarations:[
        CuenteadorComponent
    ],
    exports:[
        CuenteadorComponent
    ],
    imports:[
        CommonModule
    ]

})


export class ContadorModule{

}