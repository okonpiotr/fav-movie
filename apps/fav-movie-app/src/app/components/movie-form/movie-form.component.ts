import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
import { AutoComplete } from "primeng/autocomplete";
import { Observable, of } from "rxjs";

@Component({
  selector: 'movie-app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit, AfterViewInit {
  @ViewChild('favouriteMovie') favouriteMovieControl?: AutoComplete;

  countriesOptions: SelectItem[] = enumToArray(Country);
  formGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required, lettersOnlyValidator()]),
      username: new FormControl('', [Validators.email]),
      country: new FormControl('',[Validators.required] ),
      postCode: new FormControl('', [this.postalCodeValidator()]),
      favouriteMovie: new FormControl(''),
    });

  countryFormControl = this.formGroup.get('country') as FormControl;

  // movieSuggestion$: Observable<any[] | null> = of(['a','aaaaaa', 'aaaaaaa']);

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }


  onSubmit(): void {

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
