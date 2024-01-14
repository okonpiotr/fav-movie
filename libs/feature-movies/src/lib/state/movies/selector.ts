import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState, State } from "./reducer";
import { featureMovie } from "./utils";

// export const selectMovieFeature = createFeatureSelector<State>(featureMovie);
// export const selectMovieFeature =

// export const selectMovieFeature = (state: State) => state.featureMovie;
// export const selectMovieFeature = (state: State) => state.featureMovie;

export const selectMovieFeature  = createFeatureSelector<State, MovieState>(featureMovie)

export const selectMovieFromListBasedOnKey = createSelector(
  selectMovieFeature,
  (featureState: MovieState, key: string) => featureState.movies[key]
);

export const selectCurrentMoviesList = createSelector(
  selectMovieFeature,
  (featureState) => featureState.currentSelection
);

export const selectFetchMovieListStatus = createSelector(
  selectMovieFeature,
  (featureState) => featureState.fetchStatus
)
