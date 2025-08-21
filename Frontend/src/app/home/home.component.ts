import { Component, inject, ChangeDetectorRef} from '@angular/core';
import { WeatherListingComponent } from '../weather-listing/weather-listing.component';
import { IWeather } from '../iweather';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [WeatherListingComponent, CommonModule, FormsModule],
  template: `
    <header>
      <h1 id="title">Weather App</h1>
    </header>
    <section class="section-input">
      <h2>Enter a city name to find this week's coming weather</h2>
      <input
        type="text"
        placeholder="Enter city name"
        (keydown.enter)="onEnter()"
        [(ngModel)]="city"
      />
      <p>{{message}}</p>
    </section>
    <section class="section-weather-listing">
      <app-weather-listing
        *ngFor="let listingWeather of weatherArray"
        [weatherData]="listingWeather"
      ></app-weather-listing>
    </section>
  `,
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  weatherService: WeatherService = inject(WeatherService);

  weatherArray: IWeather[] = [];
  private detector: ChangeDetectorRef = inject(ChangeDetectorRef);

  dity:number = 1756177200;
  date: Date = new Date(this.dity * 1000);

  city: string = '';
  message: string = '';

  async onEnter(): Promise<void> {
    console.log(this.city);
    const response = await this.weatherService.getFiveDayWeatherForCity(this.city);

    if(response == null)
    {
      console.log("fetch returned empty handed/null")
      this.message = "Could not find provided city";
      this.weatherArray = [];

    }
    else
    {
      this.weatherArray = response;
      this.message = "";
    }

    this.detector.detectChanges();
  }


  
}
