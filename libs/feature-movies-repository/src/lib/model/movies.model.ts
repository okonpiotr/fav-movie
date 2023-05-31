export enum Country {
  Ireland=  'IRELAND',
  UK = 'UNITED_KINGDOM',
}

export interface UserMovies {
  name: string,
  username: string,
  Country: Country,
  postCode: string,
  favouriteMovie: string,
}

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
