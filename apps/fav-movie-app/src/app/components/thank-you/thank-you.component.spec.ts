import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from "rxjs";
import { ThankYouComponent } from "./thank-you.component";
import { MovieFormModel } from "../model/movie-form.model";

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

  describe('checks displaying of items ', ()=> {

    it('should display name',  () => {
      const data = {name: 'testName'} as MovieFormModel;
      // Given
      component.formData$ = of(data)

      console.log('page.nameContainer', page.nameContainer)
      // Then
      expect(page.nameContainer).toBeTruthy();
    });

  })

});

class Page<T> {
  private domRoot: HTMLElement;

  constructor(private fixture: ComponentFixture<T>) {
    this.domRoot = fixture.nativeElement;
  }

  get nameContainer(): HTMLDivElement {
    return this.domRoot.querySelector(`h1`) as HTMLElement
  }

  get nameContainer(): HTMLDivElement {
    return this.domRoot.querySelector(`[data-test-name]`) as HTMLDivElement
  }


}
