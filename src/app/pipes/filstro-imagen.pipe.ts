import { PeliculaDetalle } from './../interfaces/interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filstroImagen'
})
export class FilstroImagenPipe implements PipeTransform {

  transform(peliculas: PeliculaDetalle[]) {
    return peliculas.filter(peli => {
       return peli.backdrop_path;
      });
  }

}
