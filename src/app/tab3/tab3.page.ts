import { MoviesService } from './../services/movies.service';
import { DataLocalService } from './../services/data-local.service';
import { PeliculaDetalle, Genre } from './../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  peliculas: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  favoritoPorGenero: any[] = [];

  constructor(private dataLocal: DataLocalService, private moviesService: MoviesService) {}

  ngOnInit(){
  }
  async ionViewWillEnter(){
    this.cargarDatos();
  }

  async cargarDatos(){
    this.peliculas = await this.dataLocal.cargarFavoritos();
    this.generos = await this.moviesService.cargarGeneros();

    this.pelisPorGenero(this.generos, this.peliculas);
  }

  public pelisPorGenero(generos: Genre[], Peliculas: PeliculaDetalle[]){
    this.favoritoPorGenero =[];
    generos.forEach(genero => {
      this.favoritoPorGenero.push({
        genero: genero.name,
        pelis: this.peliculas.filter( peli => {
          return peli.genres.find( genre => genre.id === genero.id);
        })
      });
    });
  }
}
