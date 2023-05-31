import { Action } from '@ngrx/store';

import * as FeatureMovieActions from './feature-movie.actions';
import {
  FeatureMovieState,
  initialFeatureMovieState,
  featureMovieReducer,
} from './feature-movie.reducer';

describe('FeatureMovie Reducer', () => {
  const createFeatureMovieEntity = (
    id: string,
    name = ''
  ): FeatureMovieEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid FeatureMovie actions', () => {
    it('loadFeatureMovieSuccess should return the list of known FeatureMovie', () => {
      const featureMovie = [
        createFeatureMovieEntity('PRODUCT-AAA'),
        createFeatureMovieEntity('PRODUCT-zzz'),
      ];
      const action = FeatureMovieActions.loadMoviesSuccess({
        featureMovie,
      });

      const result: FeatureMovieState = featureMovieReducer(
        initialFeatureMovieState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = featureMovieReducer(initialFeatureMovieState, action);

      expect(result).toBe(initialFeatureMovieState);
    });
  });
});
