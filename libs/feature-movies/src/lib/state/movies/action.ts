import { createAction, props } from '@ngrx/store';
import { Movie } from "@roomex-piotr-workspace/feature-movies-repository";
import { FetchStatus } from "./reducer";


export const setMovieFetchState = createAction('[Movie] Set fetch status', props<{fetchStatus: FetchStatus}>())
export const loadMovies = createAction('[Movie] Load Movies', props<{ key: string }>());
export const loadMoviesSuccess = createAction('[Movie] Load Movies Success', props<{key: string,  movies: Movie[] }>());
export const loadMoviesFailure = createAction('[Movie] Load Movies Failure', props<{ error: any }>());
