import { Injectable } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import {
  State,
  FetchStatus,
  loadMovies,
  selectCurrentMoviesList,
  selectFetchMovieListStatus
} from "@roomex-piotr-workspace/feature-movies";

import { Movie } from "@roomex-piotr-workspace/feature-movies-repository";

@Injectable()
export class MoviesFacadeService {
  movieSuggestions$: Observable<string[]> = this.movieStore.pipe(
    select(selectCurrentMoviesList),
    map( (result: Movie[]) => result?.map(singleMovie => singleMovie.title) ?? [] )
  );

  fetchStatus$: Observable<FetchStatus> = this.movieStore.pipe(
    select(selectFetchMovieListStatus)
  )

  constructor(private movieStore: Store<State>) { }

  loadData(key: string) {
    this.movieStore.dispatch( loadMovies( {key}));
  }

}
