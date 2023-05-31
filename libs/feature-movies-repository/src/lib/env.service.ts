import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
  Usually that kind of service would be in more "upper" place of the hierarchy. Workspace would contain many apps and env service would be somewhere higher in the hierarchy supporting other apps as well. Values here
  would come from cloud settings and be filled during terraform process
 */
export class EnvService {
  movieListApiKey = 'secret'
  moviesListApiUrl = 'https://www.omdbapi.com/?apikey=&type=movie';

  constructor() { }
}
