import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromFeatureMovie from './state/movies/feature-movie.reducer';
import { FeatureMovieEffects } from './state/movies/feature-movie.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromFeatureMovie.FEATURE_MOVIE_FEATURE_KEY,
      fromFeatureMovie.featureMovieReducer
    ),
    EffectsModule.forFeature([FeatureMovieEffects]),
  ],
})
export class FeatureMoviesModule {}
