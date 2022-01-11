import { RespuestaMDB, Pelicula } from './../interfaces/interfaces';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasReciente: Pelicula[] = [];
  populares: Pelicula[] = [];

  constructor(private moviService: MoviesService) {}

  ngOnInit(){
    this.moviService.getFeature().subscribe(resp => {
      this.peliculasReciente = resp.results;
    });

    this.getPopulares();
  }

  cargarMas(){
    this.getPopulares();
  }

  getPopulares(){
    this.moviService.getPopulares().subscribe(resp => {
      const arrayTemp = [...this.populares, ...resp.results];
      this.populares = arrayTemp;
    });
  }

}
