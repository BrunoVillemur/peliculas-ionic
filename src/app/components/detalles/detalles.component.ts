import { DataLocalService } from './../../services/data-local.service';
import { PeliculaDetalle, Cast } from './../../interfaces/interfaces';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  existe = false;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };
  constructor(private moviesService: MoviesService, private modalCtrl: ModalController, private dataLocal: DataLocalService) { }

  async ngOnInit() {
   this.existe = await this.dataLocal.existePelicula(this.id);
   this.moviesService.getPeliculaDetalle(this.id).subscribe( resp =>{
     console.log( resp );
     this.pelicula = resp;
   });
   this.moviesService.getActoresDetalle(this.id).subscribe( resp =>{
    console.log( resp );
    this.actores = resp.cast;
  });
  }
  regresar(){
    
    this.modalCtrl.dismiss();
  }
  favoritos(){
   this.existe = this.dataLocal.guardarPelicula(this.pelicula);
  }
}
