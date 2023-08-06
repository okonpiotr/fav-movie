import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { setMovieFetchState, loadMovies, loadMoviesFailure, loadMoviesSuccess } from "./action";
import { MoviesService } from "@roomex-piotr-workspace/feature-movies-repository";
import { FetchStatus } from "@roomex-piotr-workspace/feature-movies";

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      tap(() => setMovieFetchState({fetchStatus: FetchStatus.progress})),
      mergeMap((action) =>
        this.movieService.getMoviesList(action.key).pipe(
          map((movies) => loadMoviesSuccess({key: action.key, movies})),
          catchError((error) => of(loadMoviesFailure({error})))
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private movieService: MoviesService
  ) {
  }

}



