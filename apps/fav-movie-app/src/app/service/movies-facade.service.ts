import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

//todo not for root
@Injectable({
  providedIn: 'root'
})
export class MoviesFacadeService {

  constructor(private store: Store<any>) { }

  loadData(data: any) {
    this.store.dispatch(new LoadData(data));
  }

  getData(): Observable<any> {
    return this.store.select(getData);
  }

}
