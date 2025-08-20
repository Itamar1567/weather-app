import { Component, inject } from '@angular/core';
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

  city: string = '';
  message: string = '';

  async onEnter(): Promise<void> {
    console.log(this.city);
    const response = await this.weatherService.getWeatherForCity(this.city);

    if(response == null)
    {
      console.log("fetch returned empty handed/null")
        this.message = "Could not find provided city";
    }
    else
    {
      console.log(response);
      this.message = "";
    }
  }

  //temp array for testing
  weatherArray: IWeather[] = [
    {
      id: 0,
      temperature: 30,
      windSpeed: 100,
      dayType: 'Sunny',
      dayImg: `assets/images/sunny.png`,
    },
    {
      id: 1,
      temperature: 20,
      windSpeed: 500,
      dayType: 'Windy',
      dayImg: `assets/images/windy.png`,
    },
    {
      id: 2,
      temperature: 9,
      windSpeed: 9000,
      dayType: 'Rainy',
      dayImg: `assets/images/rainy.png`,
    },
  ];
}
