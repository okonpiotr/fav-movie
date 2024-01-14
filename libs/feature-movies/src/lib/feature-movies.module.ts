import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieReducer } from "./state/movies/reducer";
import { MovieEffects } from "./state/movies/effect";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { featureMovie } from "./state/movies/utils";

@NgModule({
  imports: [
    CommonModule,

    EffectsModule.forFeature([MovieEffects]),
    StoreModule.forFeature(
      featureMovie, MovieReducer
      ),
  ],
})
export class FeatureMoviesModule {}
