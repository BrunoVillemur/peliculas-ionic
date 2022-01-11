import { DetallesComponent } from './../components/detalles/detalles.component';
import { MoviesService } from './../services/movies.service';
import { Component } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  buscando=false;
  peliculas: Pelicula [] = [];
  ideas: string[] = ['Spiderman', 'SuperMan', 'Warcraft', 'El señor de los anillos'];
  constructor(private moviesService: MoviesService, private modalCtrl: ModalController) {}

  buscarPelicula(event){
    const valor = event.detail.value;
    this.buscando=true;
    if (valor !== ''){
      this.moviesService.getBuscarPelicula(valor).subscribe( resp =>{
      console.log(resp);
      this.peliculas = resp['results'];
      this.buscando = false;
    });
    }else{
      this.peliculas = [] ;
      this.buscando = false;
      return;
    }
  }

  async mostrarDetalle( id: number) {
    const modal = await this.modalCtrl.create({
      component: DetallesComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }
}
