import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, mergeMap, map } from 'rxjs';
import * as FeatureMovieActions from './feature-movie.actions';
import { loadMovies, loadMoviesFailure, loadMoviesSuccess } from "./feature-movie.actions";
import { MoviesService } from "@roomex-piotr-workspace/feature-movies-repository";

@Injectable()
export class FeatureMovieEffects {
  private actions$ = inject(Actions);

  constructor(
    private moviesService: MoviesService
  ) {
  }

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeatureMovieActions.initFeatureMovie),
      switchMap(() =>
        of(FeatureMovieActions.loadMoviesSuccess({ featureMovie: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(FeatureMovieActions.loadMoviesFailure({ error }));
      })
    )
  );


  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      mergeMap((action) =>
        this.moviesService.getMoviesList(action.payload).pipe(
          map((movies) => loadMoviesSuccess({ featureMovie: movies })),
          catchError((error) => of(loadMoviesFailure({ error })))
        )
      )
    )
  )
}
