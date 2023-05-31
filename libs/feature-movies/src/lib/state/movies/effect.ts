import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { loadMovies, loadMoviesFailure, loadMoviesSuccess } from "./action";
import { MoviesService } from "@roomex-piotr-workspace/feature-movies-repository";

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      mergeMap((action) =>
        this.movieService.getMoviesList(action.payload).pipe(
          map((movies) => loadMoviesSuccess({ movies })),
          catchError((error) => of(loadMoviesFailure({ error })))
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



