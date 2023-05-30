import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FEATURE_MOVIE_FEATURE_KEY,
  FeatureMovieState,
  featureMovieAdapter,
} from './feature-movie.reducer';

// Lookup the 'FeatureMovie' feature state managed by NgRx
export const selectFeatureMovieState = createFeatureSelector<FeatureMovieState>(
  FEATURE_MOVIE_FEATURE_KEY
);

const { selectAll, selectEntities } = featureMovieAdapter.getSelectors();

export const selectFeatureMovieLoaded = createSelector(
  selectFeatureMovieState,
  (state: FeatureMovieState) => state.loaded
);

export const selectFeatureMovieError = createSelector(
  selectFeatureMovieState,
  (state: FeatureMovieState) => state.error
);

export const selectAllFeatureMovie = createSelector(
  selectFeatureMovieState,
  (state: FeatureMovieState) => selectAll(state)
);

export const selectFeatureMovieEntities = createSelector(
  selectFeatureMovieState,
  (state: FeatureMovieState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectFeatureMovieState,
  (state: FeatureMovieState) => state.selectedId
);

export const selectEntity = createSelector(
  selectFeatureMovieEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
