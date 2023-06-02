import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function lettersOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const lettersOnlyRegex = /^[a-zA-Z]+$/;
    const isValid = lettersOnlyRegex.test(control.value);

    return isValid ? null : { lettersOnly: true };
  };
}

export function validateChildControls(inputControl: AbstractControl): void {
  const formGroup = inputControl as FormGroup;
  formGroup.markAsTouched();
  formGroup.updateValueAndValidity()

    Object.values(formGroup.controls).forEach((childControl: AbstractControl) => {
      const control = childControl as FormControl;
      control.updateValueAndValidity();
      control.markAsDirty();
      control.markAsTouched();
    })
}

export function noNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = (control as FormControl).value;
    const hasNumbers: boolean = /[0-9]/.test(value); // Check if the value contains any numbers

    return hasNumbers ? { noNumbers: true } : null;
  };
}

