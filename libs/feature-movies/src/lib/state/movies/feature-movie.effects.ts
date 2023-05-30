import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as FeatureMovieActions from './feature-movie.actions';
import * as FeatureMovieFeature from './feature-movie.reducer';

@Injectable()
export class FeatureMovieEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeatureMovieActions.initFeatureMovie),
      switchMap(() =>
        of(FeatureMovieActions.loadFeatureMovieSuccess({ featureMovie: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(FeatureMovieActions.loadFeatureMovieFailure({ error }));
      })
    )
  );
}
