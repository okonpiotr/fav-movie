import { createReducer, on } from "@ngrx/store";
import { addMovie, loadMoviesSuccess, replaceMovies } from "./action";
import { Movie } from "@roomex-piotr-workspace/feature-movies-repository";

export interface MovieState {
  movies: Movie[];
}


export const initialState: MovieState = {
  movies: []
}

export const MovieReducer = createReducer(
  initialState,

  on(replaceMovies, (state,  {movies} ) => {
    return {...state, ...{movies}}
  }),
  on(loadMoviesSuccess, (state,  {movies} ) => {
    return {...state, ...{movies}}
  }),
  on(addMovie, (state,  {movie} ) => {
    return {...state, ...{movies: [...state.movies, movie]}}
  })
);

