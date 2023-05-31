import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorDisplayComponent } from './components/form-error-display/form-error-display.component';
import { ErrorToMessagePipe } from './components/form-error-display/pipe/error-to-message.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FormErrorDisplayComponent, ErrorToMessagePipe],
  exports: [FormErrorDisplayComponent],
})
export class FeatureSharedComponentsModule {}
