import { DetallesComponent } from './../detalles/detalles.component';
import { async } from '@angular/core/testing';
import { Pelicula } from './../../interfaces/interfaces';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculas: Pelicula[]=[];
  @Output() load = new EventEmitter<boolean>();
  slidesOpts = {
    slidesPerView: 3.3,
    freeMode: true
  };
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async mostrarDetalle(id:number){
    const modal = await this.modalCtrl.create({
      component: DetallesComponent,
      componentProps: {
        id
      }
    });
    modal.onDidDismiss().then(data => {
      this.load.emit(true);
    });
    modal.present();
  }

}
