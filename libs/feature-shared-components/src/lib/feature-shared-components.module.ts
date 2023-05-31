import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorDisplayComponent } from './components/form-error-display/form-error-display.component';

//todo: complete the component
@NgModule({
  imports: [CommonModule],
  declarations: [FormErrorDisplayComponent],
  exports: [
    FormErrorDisplayComponent
  ]
})
export class FeatureSharedComponentsModule  {}
