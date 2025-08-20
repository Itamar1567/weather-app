import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherListingComponent } from './current-weather-listing.component';

describe('CurrentWeatherListingComponent', () => {
  let component: CurrentWeatherListingComponent;
  let fixture: ComponentFixture<CurrentWeatherListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentWeatherListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentWeatherListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
