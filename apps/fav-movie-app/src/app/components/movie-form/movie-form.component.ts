import { Component, OnInit } from '@angular/core';
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
import { Router } from "@angular/router";

@Component({
  selector: 'movie-app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit{
  countriesOptions: SelectItem[] = enumToArray(Country);
  formGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required, lettersOnlyValidator()]),
      username: new FormControl('', [Validators.email]),
      country: new FormControl(this.countriesOptions[0].value,[Validators.required] ),
      postCode: new FormControl('', [this.postalCodeValidator()]),
      favouriteMovie: new FormControl(''),
    });

  nameFormControl = this.formGroup.get('name') as FormControl;
  usernameFormControl = this.formGroup.get('username') as FormControl;
  countryFormControl = this.formGroup.get('country') as FormControl;
  postCodeFormControl = this.formGroup.get('postCode') as FormControl;
  favouriteMovieFormControl = this.formGroup.get('favouriteMovie') as FormControl;

  movieSuggestion$ = this.moviesFacadeService.movieSuggestions$;

  constructor(private moviesFacadeService: MoviesFacadeService, private router: Router) {}

  ngOnInit(): void {
    this.countryFormControl.valueChanges.subscribe(()=> {
      this.postCodeFormControl.updateValueAndValidity({emitEvent: true, onlySelf: false})
      this.postCodeFormControl.markAsDirty();
    });
  }

  onSubmit(): void {
    if (!this.formGroup.valid) {
      this.formGroup.markAsDirty();
      this.formGroup.markAsTouched();
      this.usernameFormControl.markAsDirty();
      return
    }
    this.router.navigate(['/thankyou']);
  }

  searchMovieTitle(): void {
    this.moviesFacadeService.loadData(this.favouriteMovieFormControl.value);
  }

  private postalCodeValidator(): ValidatorFn {
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
        if (!postalCode?.trim()) {
          return { required: true }
        }
        const isCorrect = isUKPostalCodeCorrect(postalCode);
        return isCorrect ? null : { incorrectPostalCode: true} ;
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
