import { createAction, props } from '@ngrx/store';
import { Movie } from "@roomex-piotr-workspace/feature-movies-repository";

export const addMovie = createAction('[Movie] Add',  props<{ movie: Movie }>() );
export const replaceMovies = createAction('[Movie] replace list',  props<{ movies: Movie[] }>() );

export const loadMovies = createAction('[Movie] Load Movies', props<{ payload: string }>());
export const loadMoviesSuccess = createAction('[Movie] Load Movies Success', props<{ movies: Movie[] }>());
export const loadMoviesFailure = createAction('[Movie] Load Movies Failure', props<{ error: any }>());
