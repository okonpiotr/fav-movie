import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import { EMPTY, Observable, of, startWith, switchMap } from "rxjs";

export type ErrorDictionary = { [error: string] :string  }

@Component({
  selector: 'sc-form-error-display',
  templateUrl: './form-error-display.component.html',
  styleUrls: ['./form-error-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorDisplayComponent {
  @Input() errorsTab:  ErrorDictionary = {};
  firstErrorCode$: Observable<any> = EMPTY;

  private _control?: FormControl;

  get control(): FormControl | undefined{
    return this._control;
  };

  @Input() set control(val: FormControl | undefined){
    this._control = val;
    this.firstErrorCode$ = this.createObserveStream();
  }

  createObserveStream(): Observable<any>{
    if (!this.control) {
      return of(null);
    }
    return this.control.statusChanges.pipe(
        startWith(''),
        switchMap(() => {
          return of(firstError(this.control))
        })
    );
  }
}

function firstError(control?: FormControl): string | undefined {
  if (!control?.errors || !control.dirty) {
    return undefined;
  }
  const errors = control?.errors as Object;
  const firstProperty = Object.keys(errors)?.[0] ;
  return firstProperty;
}
