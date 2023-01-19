import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[]=['Spiderman','Hulk','Thor','Capitan america'];

  heroesBorrados: string[]= [];

  borrarHeroe(){
    console.log('borrando...')
    

    const elemento=this.heroes.shift()
    
    this.heroesBorrados.push(elemento!);
    


  }

}
