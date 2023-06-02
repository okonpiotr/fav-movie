import { Country } from "@roomex-piotr-workspace/feature-movies-repository";

export interface MovieFormModel {
  name:  string,
  username?: string,
  country:  Country,
  postCode?: string,
  favouriteMovie?:  string,
}
