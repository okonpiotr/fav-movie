import { createAction, props } from '@ngrx/store';
import { IMDBMovie } from "@roomex-piotr-workspace/feature-movies-repository";

export const initFeatureMovie = createAction('[FeatureMovie Page] Init');

export const loadMoviesSuccess = createAction(
  '[FeatureMovie/API] Load FeatureMovie Success',
  props<{ featureMovie: IMDBMovie[] }>()
);

export const loadMoviesFailure = createAction(
  '[FeatureMovie/API] Load FeatureMovie Failure',
  props<{ error: any }>()
);

export const loadMovies = createAction('[FeatureMovie/API] Load Movies Action', props<{ payload: any }>());
