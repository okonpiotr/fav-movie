import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieReducer } from "./state/movies/reducer";
import { MovieEffects } from "./state/movies/effect";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forRoot(
      {
        featureMovie: MovieReducer,
      }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
})
export class FeatureMoviesModule {}
