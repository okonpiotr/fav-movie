import { Route } from '@angular/router';
import { MovieFormComponent } from "./components/movie-form/movie-form.component";
import { ThankYouComponent } from "./components/thank-you/thank-you.component";

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'enter', pathMatch: "full" },
  { path: 'enter', component: MovieFormComponent },
  { path: 'thankyou', component: ThankYouComponent },
  { path: '**', redirectTo:  'enter'}
];
