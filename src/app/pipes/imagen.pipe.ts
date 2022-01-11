import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPah;
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, size: string = 'w500'): string {
    if ( !imagen ){
      return './assets/no-image-banner.jpg';
    }
    const imagenUrl = `${URL}/${size}${imagen}`;
    
    return imagenUrl;
  }

}
