import { createReducer, on } from "@ngrx/store";
import { setMovieFetchState, loadMoviesFailure, loadMoviesSuccess } from "./action";
import { Movie } from "@roomex-piotr-workspace/feature-movies-repository";

export enum FetchStatus {
  none,
  progress,
  done,
  error
}

export interface MovieState {
  movies: { [key: string]: Movie[] };
  currentSelection: Movie[]
  currentKey?: string;
  fetchStatus: FetchStatus
}

export const initialState: MovieState = {
  movies: {},
  currentSelection: [],
  currentKey: undefined,
  fetchStatus: FetchStatus.none
}

export const MovieReducer = createReducer(
  initialState,

  on(loadMoviesSuccess, (state, {key, movies}) => {
    return expandStateByNewMoviesWithKey(state, movies, key)
  }),

  on(loadMoviesFailure, (state) => {
    return {...state, ...{fetchStatus: FetchStatus.error}};
  }),

  on(setMovieFetchState, (state, {fetchStatus}) => {
    return {...state, ...{fetchStatus}};
  })
);

function expandStateByNewMoviesWithKey(state: MovieState, moviesToAdd: Movie[], key: string): MovieState {
  const stateCopy = {...state};
  stateCopy.movies = {...stateCopy.movies, ...{[key]: moviesToAdd}}
  stateCopy.currentSelection = [...moviesToAdd];
  stateCopy.currentKey = key;
  stateCopy.fetchStatus = FetchStatus.done;
  return stateCopy;
}
