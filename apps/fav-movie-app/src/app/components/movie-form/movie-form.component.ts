import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { enumToArray, lettersOnlyValidator } from "@roomex-piotr-workspace/feature-shared-utils";
import { Country } from "@roomex-piotr-workspace/feature-movies-repository";
import { SelectItem } from "primeng/api";
import { MoviesFacadeService } from "../../service/movies-facade.service";

@Component({
  selector: 'movie-app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent {
  countriesOptions: SelectItem[] = enumToArray(Country);
  formGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required, lettersOnlyValidator()]),
      username: new FormControl('', [Validators.email]),
      country: new FormControl(this.countriesOptions[0].value,[Validators.required] ),
      postCode: new FormControl('', [this.postalCodeValidator()]),
      favouriteMovie: new FormControl(''),
    });

  countryFormControl = this.formGroup.get('country') as FormControl;
  favouriteMovie = this.formGroup.get('favouriteMovie') as FormControl;

  movieSuggestion$ = this.moviesFacadeService.movieSuggestions$;

  constructor(private moviesFacadeService: MoviesFacadeService) {

  }

  onSubmit(): void {


  }

  searchMovieTitle(): void {
    this.moviesFacadeService.loadData(this.favouriteMovie.value);
  }


  postalCodeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const postalCode = control.value.value;
      if (this.countryFormControl?.value === Country.Ireland) {
        if (!postalCode?.trim()) {
          return null;
        } else if (!isIrelandPostalCodeCorrect(postalCode)) {
          return {incorrectPostalCode: true};
        }
      }

      if (this.countryFormControl?.value === Country.UK) {
        const isCorrect = isUKPostalCodeCorrect(postalCode);
        return isCorrect ? null : {incorrectPostalCode: true};
      }

      return null;
    };
  }
}

function isIrelandPostalCodeCorrect(postalCode: string): boolean {
  return postalCode.length >= 6 && postalCode.length <= 10;
}

function isUKPostalCodeCorrect(postalCode: string): boolean {
  const UKPostalRegex = /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/; // Regular expression to match only letters
  return UKPostalRegex.test(postalCode);
}
