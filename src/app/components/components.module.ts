import { DetallesComponent } from './detalles/detalles.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';
import { SlidshowParesComponent } from './slidshow-pares/slidshow-pares.component';



@NgModule({
  entryComponents: [
    DetallesComponent
  ],
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent, SlidshowParesComponent, DetallesComponent],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlidshowParesComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
