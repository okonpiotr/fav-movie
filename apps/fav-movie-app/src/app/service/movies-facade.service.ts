import { Injectable } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { AppState, loadMovies, selectMovieList } from "@roomex-piotr-workspace/feature-movies";

import { Movie } from "@roomex-piotr-workspace/feature-movies-repository";

@Injectable()
export class MoviesFacadeService {
  movieSuggestions$: Observable<string[]> = this.movieStore.pipe(
    select(selectMovieList),
    map( (result: Movie[]) => result?.map(singleMovie => singleMovie.title) ?? [] )
  );

  constructor(private movieStore: Store<AppState>) { }

  loadData(partOfMovieName: string) {
    this.movieStore.dispatch( loadMovies( {payload: partOfMovieName}));
  }


}
