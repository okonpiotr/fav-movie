import { Injectable } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { AppState, loadMovies, selectMovieList } from "@roomex-piotr-workspace/feature-movies";

//todo- change
import { IMDBMovie } from "@roomex-piotr-workspace/feature-movies-repository";

//todo not for root
@Injectable()
export class MoviesFacadeService {
  movieSuggestions$: Observable<string[]> = this.movieStore.pipe(
    select(selectMovieList),
    map( (result: IMDBMovie[]) => result?.map(singleMovie => singleMovie.Title) ?? [] )
  );

  constructor(private movieStore: Store<AppState>) { }

  loadData(partOfMovieName: string) {
    this.movieStore.dispatch( loadMovies( {payload: partOfMovieName}));
  }


}
