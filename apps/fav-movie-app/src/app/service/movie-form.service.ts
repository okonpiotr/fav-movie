import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";
import { MovieFormModel } from "../components/model/movie-form.model";

/*
NgrX was already used - now the second way of storing the data
 */

@Injectable({
  providedIn: 'root'
})

export class MovieFormService {
  private movieFormDataSubject = new BehaviorSubject<MovieFormModel | null>(null);

  movieFormData$ = this.movieFormDataSubject.asObservable()


  setMovieFormData(movieFormData: MovieFormModel): void{
    this.movieFormDataSubject.next(movieFormData);
  }

}
