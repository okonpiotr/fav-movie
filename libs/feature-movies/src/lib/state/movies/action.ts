import { createAction, props } from '@ngrx/store';
import { IMDBMovie } from "@roomex-piotr-workspace/feature-movies-repository";

export const addMovie = createAction('[Movie] Add',  props<{ movie: IMDBMovie }>() );
export const replaceMovies = createAction('[Movie] replace list',  props<{ movies: IMDBMovie[] }>() );
// export const loadMovies = createAction('[Movie] Load to list',  props<{ Movies: Movie[] }>() );

export const loadMovies = createAction('[Movie] Load Movies', props<{ payload: string }>());
export const loadMoviesSuccess = createAction('[Movie] Load Movies Success', props<{ movies: IMDBMovie[] }>());
export const loadMoviesFailure = createAction('[Movie] Load Movies Failure', props<{ error: any }>());
