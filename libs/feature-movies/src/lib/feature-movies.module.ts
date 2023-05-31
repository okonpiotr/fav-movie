import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieReducer } from "./state/movies/reducer";
import { MovieEffects } from "./state/movies/effect";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forRoot(
      {
        featureMovie: MovieReducer,
      })

  ],
})
export class FeatureMoviesModule {}
