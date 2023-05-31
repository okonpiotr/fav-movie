import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as FeatureMovieActions from './feature-movie.actions';
import { IMDBMovie } from "@roomex-piotr-workspace/feature-movies-repository";

export const FEATURE_MOVIE_FEATURE_KEY = 'featureMovie';

export interface FeatureMovieState extends EntityState<IMDBMovie> {
  selectedId?: string | number; // which FeatureMovie record has been selected
  loaded: boolean; // has the FeatureMovie list been loaded
  error?: string | null; // last known error (if any)
}

export interface FeatureMoviePartialState {
  readonly [FEATURE_MOVIE_FEATURE_KEY]: FeatureMovieState;
}

export const featureMovieAdapter: EntityAdapter<IMDBMovie> =
  createEntityAdapter<IMDBMovie
>();

export const initialFeatureMovieState: FeatureMovieState =
  featureMovieAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

export const movieReducer = createReducer(
  initialFeatureMovieState,
  on(FeatureMovieActions.initFeatureMovie, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(FeatureMovieActions.loadMoviesSuccess, (state, { featureMovie }) =>
    featureMovieAdapter.setAll(featureMovie, { ...state, loaded: true })
  ),
  on(FeatureMovieActions.loadMoviesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function featureMovieReducer(
  state: FeatureMovieState | undefined,
  action: Action
) {
  return movieReducer(state, action);
}
