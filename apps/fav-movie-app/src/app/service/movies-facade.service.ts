import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { EMPTY, Observable } from "rxjs";
import { loadMovies } from "@roomex-piotr-workspace/feature-movies";

//todo not for root
@Injectable({
  providedIn: 'root'
})
export class MoviesFacadeService {

  constructor(private store: Store<any>) { }

  loadData(data: any) {
    this.store.dispatch( loadMovies(data));
  }

  getData(): Observable<any> {
//    return this.store.select(getData);

    return EMPTY;
  }

}
