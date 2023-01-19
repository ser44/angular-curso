
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { HereoComponent } from './heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HereoComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent,
        HeroesModule
    ],
    imports: [
        CommonModule,
    ]


})
export class HeroesModule{


}
