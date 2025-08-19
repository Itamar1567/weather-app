import { Component } from '@angular/core';
import { WeatherListingComponent } from '../weather-listing/weather-listing.component';
import { IWeather } from '../iweather';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [WeatherListingComponent, CommonModule],
  template: `
    <header>
      <h1 id="title">Weather App</h1>
    </header>
    <section class="section-input">
      <h2>Enter a city name to find this week's coming weather</h2>
      <input type="text" placeholder="Enter city name" />
    </section>
    <section class="section-weather-listing">
      <app-weather-listing *ngFor="let listingWeather of weatherArray" [weatherData]="listingWeather"></app-weather-listing>
    </section>
  `,
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  //temp array for testing
  weatherArray: IWeather[] = [
    {
      id: 0,
      temperature: 30,
      windSpeed: 100,
      dayType: "Sunny",
    },
    {
      id: 1,
      temperature: 20,
      windSpeed: 500,
      dayType: "Windy",
    },
    {
      id: 2,
      temperature: 9,
      windSpeed: 9000,
      dayType: "Rainy",
    },
    {
      id: 2,
      temperature: 9,
      windSpeed: 9000,
      dayType: "Rainy",
    },{
      id: 2,
      temperature: 9,
      windSpeed: 9000,
      dayType: "Rainy",
    },{
      id: 2,
      temperature: 9,
      windSpeed: 9000,
      dayType: "Rainy",
    },{
      id: 2,
      temperature: 9,
      windSpeed: 9000,
      dayType: "Rainy",
    },{
      id: 2,
      temperature: 9,
      windSpeed: 9000,
      dayType: "Rainy",
    },{
      id: 2,
      temperature: 9,
      windSpeed: 9000,
      dayType: "Rainy",
    },
    
  ];
}
