import { Pipe, PipeTransform } from '@angular/core';
import { ErrorDictionary } from "../form-error-display.component";

const texts: ErrorDictionary = {
  required: 'Please fill the field',
  email: 'Username musts be email format',
  incorrectPostalCode: 'Please enter valid postal code',
  lettersOnly: 'Please enter only letters'
}

@Pipe({
  name: 'errorToMessage',
})
export class ErrorToMessagePipe implements PipeTransform {
  transform(error: string, additionalTab?: ErrorDictionary): string {
     return errorToMessage(error, additionalTab);
  }
}


export function errorToMessage(error: string, additionalTab?: ErrorDictionary): string {
  if (additionalTab?.[error]) {
    return additionalTab?.[error] ?? '';
  }
  else if (texts?.[error]) {
    return texts?.[error] ?? error;
  }
 return error;
}
