import { createReducer, on } from "@ngrx/store";
import { setMovieFetchState, loadMoviesFailure, loadMoviesSuccess } from "./action";
import { Movie } from "@roomex-piotr-workspace/feature-movies-repository";
import * as AppState from  '../../../../../../../fav-movie/apps/fav-movie-app/src/app/state/state'

export enum FetchStatus {
  none,
  progress,
  done,
  error
}

export interface State extends AppState.State {
  featureMovie: MovieState
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

export const MovieReducer = createReducer<MovieState>(
  initialState,

  on(loadMoviesSuccess, (state: MovieState, {key, movies}): MovieState => {
    console.log(state);
    return expandStateByNewMoviesWithKey(state, movies, key)
  }),

  on(loadMoviesFailure, (state:MovieState): MovieState => {
    console.log(state);
    return {...state, ...{fetchStatus: FetchStatus.error}};
  }),

  on(setMovieFetchState, (state: MovieState, {fetchStatus}): MovieState=> {
    console.log(state);
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
