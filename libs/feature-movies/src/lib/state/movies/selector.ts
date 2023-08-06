import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "./reducer";
import { featureMovie } from "./utils";

export const selectMovieFeature = createFeatureSelector<MovieState>(featureMovie);

export const selectMovieList = createSelector(
  selectMovieFeature,
  (featureState: MovieState, key: string) => featureState.movies[key]
);

export const selectCurrentMoviesList = createSelector(
  selectMovieFeature,
  (featureState) => featureState.currentSelection
);
