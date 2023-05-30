import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as FeatureMovieActions from './feature-movie.actions';
import { FeatureMovieEffects } from './feature-movie.effects';

describe('FeatureMovieEffects', () => {
  let actions: Observable<Action>;
  let effects: FeatureMovieEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        FeatureMovieEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(FeatureMovieEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: FeatureMovieActions.initFeatureMovie() });

      const expected = hot('-a-|', {
        a: FeatureMovieActions.loadFeatureMovieSuccess({ featureMovie: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
