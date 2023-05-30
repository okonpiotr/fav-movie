import { FeatureMovieEntity } from './feature-movie.models';
import {
  featureMovieAdapter,
  FeatureMoviePartialState,
  initialFeatureMovieState,
} from './feature-movie.reducer';
import * as FeatureMovieSelectors from './feature-movie.selectors';

describe('FeatureMovie Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getFeatureMovieId = (it: FeatureMovieEntity) => it.id;
  const createFeatureMovieEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as FeatureMovieEntity);

  let state: FeatureMoviePartialState;

  beforeEach(() => {
    state = {
      featureMovie: featureMovieAdapter.setAll(
        [
          createFeatureMovieEntity('PRODUCT-AAA'),
          createFeatureMovieEntity('PRODUCT-BBB'),
          createFeatureMovieEntity('PRODUCT-CCC'),
        ],
        {
          ...initialFeatureMovieState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('FeatureMovie Selectors', () => {
    it('selectAllFeatureMovie() should return the list of FeatureMovie', () => {
      const results = FeatureMovieSelectors.selectAllFeatureMovie(state);
      const selId = getFeatureMovieId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = FeatureMovieSelectors.selectEntity(
        state
      ) as FeatureMovieEntity;
      const selId = getFeatureMovieId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectFeatureMovieLoaded() should return the current "loaded" status', () => {
      const result = FeatureMovieSelectors.selectFeatureMovieLoaded(state);

      expect(result).toBe(true);
    });

    it('selectFeatureMovieError() should return the current "error" state', () => {
      const result = FeatureMovieSelectors.selectFeatureMovieError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
