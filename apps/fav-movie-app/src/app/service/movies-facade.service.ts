import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { EMPTY, Observable } from "rxjs";
import { loadMovies } from "@roomex-piotr-workspace/feature-movies";

//todo- change
import { AppState } from "../../../../../libs/feature-movies/src/lib/state/app-state";

//todo not for root
@Injectable({
  providedIn: 'root'
})
export class MoviesFacadeService {

  constructor(private movieStore: Store<AppState>) { }

  loadData(data: any) {
    this.movieStore.dispatch( loadMovies());
  }

  getData(): Observable<any> {
//    return this.store.select(getData);

    return EMPTY;
  }

}
