import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FeatureSharedComponentsModule } from "@roomex-piotr-workspace/feature-shared-components";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { DropdownModule } from "primeng/dropdown";
import { AutoCompleteModule } from "primeng/autocomplete";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MovieEffects } from "../../../../libs/feature-movies/src/lib/state/movies/effect";
import { MovieReducer } from "@roomex-piotr-workspace/feature-movies";
import { HttpClientModule } from "@angular/common/http";
import { MoviesFacadeService } from "./service/movies-facade.service";

@NgModule({
  declarations: [AppComponent, MovieFormComponent, ThankYouComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FeatureSharedComponentsModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),

    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forRoot(
      {
        featureMovie: MovieReducer,
      })


  ],
  providers: [MoviesFacadeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
