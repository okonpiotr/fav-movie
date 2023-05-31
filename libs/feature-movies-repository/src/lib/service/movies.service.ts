import { Injectable } from '@angular/core';
import { EnvService } from "./env.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IMDBMovie, IMDBResponse } from "@roomex-piotr-workspace/feature-movies-repository";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private envService: EnvService, private http: HttpClient) { }

  getMoviesList(partOfMovieName: string): Observable<IMDBMovie[]> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('apikey', this.envService.movieListApiKey);
    httpParams = httpParams.set('s', partOfMovieName);
    return this.http.get<IMDBResponse>(this.envService.moviesListApiUrl, { params: httpParams }).pipe(
      map(result => result?.Search ?? [])
    );

  }

}
