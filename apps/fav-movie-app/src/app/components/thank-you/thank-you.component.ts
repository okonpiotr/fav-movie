import { Component } from '@angular/core';
import { MovieFormModel } from "../model/movie-form.model";
import { Observable } from "rxjs";
import { MovieFormService } from "../../service/movie-form.service";

@Component({
  selector: 'movie-app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent {
  formData$: Observable<MovieFormModel | null> = this.movieFormService.movieFormData$;

    constructor(private movieFormService: MovieFormService) {

}
}
