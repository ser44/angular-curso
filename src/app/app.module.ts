import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador.component';



import { HereoComponent } from './heroes/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { ContadorModule } from './contador/contador/contador.module';



@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,
    HereoComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
