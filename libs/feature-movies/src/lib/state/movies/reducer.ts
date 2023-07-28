import { createReducer, on } from "@ngrx/store";
import { loadMoviesSuccess } from "./action";
import { Movie } from "@roomex-piotr-workspace/feature-movies-repository";

export interface MovieState {
  movies: { [key: string]: Movie[] };
  currentSelection: Movie[]
  currentKey?: string;

}

export const initialState: MovieState = {
  movies: {},
  currentSelection: [],
  currentKey: undefined
}

export const MovieReducer = createReducer(
  initialState,

  on(loadMoviesSuccess, (state, {key, movies}) => {
    return expandStateByNewMoviesWithKey(state, movies, key)
  }),
);

function expandStateByNewMoviesWithKey(state: MovieState, moviesToAdd: Movie[], key: string): MovieState {
  const stateCopy = {...state};
  stateCopy.movies = {...stateCopy.movies, ...{[key]: moviesToAdd}}
  stateCopy.currentSelection = [...moviesToAdd];
  stateCopy.currentKey = key
  return stateCopy;
}
