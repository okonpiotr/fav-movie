import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from "rxjs";
import { ThankYouComponent } from "./thank-you.component";
import { MovieFormModel } from "../model/movie-form.model";
import { Country } from "@roomex-piotr-workspace/feature-movies-repository";

fdescribe('MovieFormComponent', () => {
  let component: ThankYouComponent;
  let fixture: ComponentFixture<ThankYouComponent>;
  let page: Page<ThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThankYouComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThankYouComponent);
    component = fixture.componentInstance;
    page = new Page(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('checks displaying of items ', () => {
    it('should display all legends and values', () => {
      const data: MovieFormModel = {
        "name": "Piotr",
        "username": "my.test.email@gmail.com",
        "country": Country.UK,
        "postCode": "PO16 7GZ",
        "favouriteMovie": "Batman Returns"
      }
      // Given
      component.formData$ = of(data)

      // When
      fixture.detectChanges()

      // Then
      expect(page.nameContainer).toBeTruthy();
      expect(page.usernameContainer).toBeTruthy();
      expect(page.countryContainer).toBeTruthy();
      expect(page.postCodeContainer).toBeTruthy();
      expect(page.favouriteMovieContainer).toBeTruthy();

      expect(page.nameContainer.innerHTML).toContain('Name:');
      expect(page.nameContainer.innerHTML).toContain(data.name);

      expect(page.usernameContainer.innerHTML).toContain('Username:');
      expect(page.usernameContainer.innerHTML).toContain(data.username);

      expect(page.countryContainer.innerHTML).toContain('Country:');
      expect(page.countryContainer.innerHTML).toContain(data.country);

      expect(page.postCodeContainer.innerHTML).toContain('Post code:');
      expect(page.postCodeContainer.innerHTML).toContain(data.postCode);

      expect(page.favouriteMovieContainer.innerHTML).toContain('Favourite movie:');
      expect(page.favouriteMovieContainer.innerHTML).toContain(data.favouriteMovie);
    });


    it('should not display missing field username but present the rest', () => {
      const data: MovieFormModel = {
        "name": "Piotr",
        "country": Country.UK,
        "postCode": "PO16 7GZ",
        "favouriteMovie": "Batman Returns"
      } as MovieFormModel
      // Given
      component.formData$ = of(data)

      // When
      fixture.detectChanges()

      // Then
      expect(page.nameContainer).toBeTruthy();
      expect(page.usernameContainer).toBeFalsy();
      expect(page.countryContainer).toBeTruthy();
      expect(page.postCodeContainer).toBeTruthy();
      expect(page.favouriteMovieContainer).toBeTruthy();
    });


    it('should not display missing country but present the rest', () => {
      const data: MovieFormModel = {
        "name": "Piotr",
        "username": "my.test.email@gmail.com",
        "postCode": "PO16 7GZ",
        "favouriteMovie": "Batman Returns"
      } as MovieFormModel
      // Given
      component.formData$ = of(data)

      // When
      fixture.detectChanges()

      // Then
      expect(page.nameContainer).toBeTruthy();
      expect(page.usernameContainer).toBeTruthy();
      expect(page.countryContainer).toBeFalsy();
      expect(page.postCodeContainer).toBeTruthy();
      expect(page.favouriteMovieContainer).toBeTruthy();
    });

    it('should not display missing postCode but present the rest', () => {
      const data: MovieFormModel = {
        "name": "Piotr",
        "username": "my.test.email@gmail.com",
        "country": Country.UK,
        "favouriteMovie": "Batman Returns"
      } as MovieFormModel
      // Given
      component.formData$ = of(data)

      // When
      fixture.detectChanges()

      // Then
      expect(page.nameContainer).toBeTruthy();
      expect(page.usernameContainer).toBeTruthy();
      expect(page.countryContainer).toBeTruthy();
      expect(page.postCodeContainer).toBeFalsy();
      expect(page.favouriteMovieContainer).toBeTruthy();
    });


    it('should not display missing favouriteMovie but present the rest', () => {
      const data: MovieFormModel = {
        "name": "Piotr",
        "username": "my.test.email@gmail.com",
        "country": Country.UK,
        "postCode": "PO16 7GZ",
      } as MovieFormModel
      // Given
      component.formData$ = of(data)

      // When
      fixture.detectChanges()

      // Then
      expect(page.nameContainer).toBeTruthy();
      expect(page.usernameContainer).toBeTruthy();
      expect(page.countryContainer).toBeTruthy();
      expect(page.postCodeContainer).toBeTruthy();
      expect(page.favouriteMovieContainer).toBeFalsy();
    });
  })

  describe('Invalid data checks ', () => {
    it('lack of name field - incorrect Data. Present failsafe info for the user', () => {
      const data: MovieFormModel = {
        "username": "my.test.email@gmail.com",
        "country": Country.UK,
        "postCode": "PO16 7GZ",
      } as MovieFormModel

      // Given
      component.formData$ = of(data)

      // When
      fixture.detectChanges();

      // Then
      expect(page.summaryContainer).toBeFalsy();

      expect(page.nameContainer).toBeFalsy();
      expect(page.usernameContainer).toBeFalsy();
      expect(page.countryContainer).toBeFalsy();
      expect(page.postCodeContainer).toBeFalsy();
      expect(page.favouriteMovieContainer).toBeFalsy();

      expect(page.failInfo).toBeTruthy();
      expect(page.failInfo.innerHTML).toContain('Something went wrong');

      expect(page.linkToForm).toBeTruthy();
      expect(page.linkToForm.innerHTML).toEqual('Back to the form');
      expect(page.linkToForm.getAttribute('routerLink')).toEqual('enter');
    });
  });


});

class Page<T> {
  private domRoot: HTMLElement;

  constructor(private fixture: ComponentFixture<T>) {
    this.domRoot = fixture.nativeElement;
  }

  get nameContainer(): HTMLDivElement {
    return this.domRoot.querySelector(`[data-test-name]`) as HTMLDivElement
  }

  get usernameContainer(): HTMLDivElement {
    return this.domRoot.querySelector(`[data-test-username]`) as HTMLDivElement
  }

  get countryContainer(): HTMLDivElement {
    return this.domRoot.querySelector(`[data-test-country]`) as HTMLDivElement
  }

  get postCodeContainer(): HTMLDivElement {
    return this.domRoot.querySelector(`[data-test-post-code]`) as HTMLDivElement
  }

  get favouriteMovieContainer(): HTMLDivElement {
    return this.domRoot.querySelector(`[data-test-favourite-movie]`) as HTMLDivElement
  }

  get failInfo(): HTMLDivElement {
    return this.domRoot.querySelector(`[data-test-fail-info]`) as HTMLDivElement
  }

  get summaryContainer(): HTMLDivElement {
    return this.domRoot.querySelector(`.summary-container`) as HTMLDivElement
  }
  get linkToForm(): HTMLAnchorElement {
    return this.domRoot.querySelector(`[ data-test-link-to-form]`) as HTMLAnchorElement
  }
}
