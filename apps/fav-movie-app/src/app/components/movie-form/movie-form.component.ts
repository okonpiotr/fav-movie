import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'roomex-piotr-workspace-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent {
  formGroup = new FormGroup(
    {
      name: new FormControl('', {nonNullable: true}),
      username: new FormControl('', {nonNullable: true}),
      Country: new FormControl('', {nonNullable: true}),
      postCode: new FormControl('', {nonNullable: true}),
      favouriteMovie: new FormControl('', {nonNullable: true}),
    } );


}
