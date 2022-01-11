import { DetallesComponent } from './../detalles/detalles.component';
import { Pelicula } from './../../interfaces/interfaces';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-slidshow-pares',
  templateUrl: './slidshow-pares.component.html',
  styleUrls: ['./slidshow-pares.component.scss'],
})
export class SlidshowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();
  slidesOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };
  constructor(private modalCtrl: ModalController ) { }

  ngOnInit() {}

  onClick(){
    this.cargarMas.emit();
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
