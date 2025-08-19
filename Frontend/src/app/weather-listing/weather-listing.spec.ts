import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherListingComponent } from './weather-listing.component';

describe('WeatherListingComponent', () => {
  let component: WeatherListingComponent;
  let fixture: ComponentFixture<WeatherListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
