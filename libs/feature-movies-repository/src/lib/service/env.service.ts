import { Injectable } from '@angular/core';

/*
  Usually that kind of config would be in more "upper" place of the packages hierarchy. Workspace would contain many apps and env service would be somewhere higher in the hierarchy supporting other apps as well. Values here
  would come from cloud settings and be filled during terraform process.
 */

import envSettings from './env.json';

@Injectable({
  providedIn: 'root'
})

export class EnvService {
  movieListApiKey = envSettings.movieListApiKey;
  moviesListApiUrl = envSettings.moviesListApiUrl;

  constructor() { }
}
