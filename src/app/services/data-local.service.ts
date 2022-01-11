import { Pelicula, PeliculaDetalle } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];
  constructor(private storage: Storage, private toastCtrl: ToastController) { this.cargarFavoritos(); }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  guardarPelicula( pelicula: PeliculaDetalle){

    let existe = false;
    let mensaje = '';
    let favorito=false;

    for( const peli of this.peliculas){
      if (peli.id === pelicula.id){
        existe = true;
        break;
      }
    }
    if(existe){
      this.peliculas= this.peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Removido de Favoritos'
    }else{
      this.peliculas.push(pelicula);
      mensaje= 'Se ha Guardado en Favoritos'
      favorito = true;
    }
    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);
    return favorito;
  }

  async cargarFavoritos(){
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula(id){
    await this.cargarFavoritos();
    const existe = this.peliculas.find(peli => peli.id === id);

    return (existe) ? true : false;
  }
}
