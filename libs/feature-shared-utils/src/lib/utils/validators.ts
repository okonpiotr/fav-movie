import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function lettersOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const lettersOnlyRegex = /^[a-zA-Z]+$/; // Regular expression to match only letters

    // Check if the control's value matches the letters only pattern
    const isValid = lettersOnlyRegex.test(control.value);

    // Return the validation result
    return isValid ? null : { lettersOnly: true };
  };
}
