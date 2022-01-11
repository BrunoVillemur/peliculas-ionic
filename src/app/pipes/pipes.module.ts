import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';
import { FilstroImagenPipe } from './filstro-imagen.pipe';



@NgModule({
  declarations: [ImagenPipe, ParesPipe, FilstroImagenPipe],
  exports: [
    ImagenPipe,
    ParesPipe,
    FilstroImagenPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
