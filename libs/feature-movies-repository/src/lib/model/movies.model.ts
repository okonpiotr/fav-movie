export enum Country {
  Ireland=  'Ireland',
  UK = 'United Kingdom',
}

export interface UserMovies {
  name: string,
  username: string,
  Country: Country,
  postCode: string,
  favouriteMovie: string,
}

export interface Movie {
  title: string,
}

// Model Only For API
export interface IMDBMovie {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

export interface IMDBResponse {
  Search: IMDBMovie[],
  totalResults: string;
  Response: true;
}
