import { createAction, props } from '@ngrx/store';
import { FeatureMovieEntity } from './feature-movie.models';

export const initFeatureMovie = createAction('[FeatureMovie Page] Init');

export const loadFeatureMovieSuccess = createAction(
  '[FeatureMovie/API] Load FeatureMovie Success',
  props<{ featureMovie: FeatureMovieEntity[] }>()
);

export const loadFeatureMovieFailure = createAction(
  '[FeatureMovie/API] Load FeatureMovie Failure',
  props<{ error: any }>()
);
