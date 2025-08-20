import { Component, Input } from '@angular/core';
import { IWeather } from '../iweather';

@Component({
  selector: 'app-current-weather-listing',
  imports: [],
  template: `
    <section class="section-listing">
      <div class="img-container">
        <img [src]="weatherData.dayImg" id="weather-image" alt="weather-img" />
        <div class="img-text-overlay" alt="Day image">
            <h2>{{weatherData.dayType}}</h2>
            <h1>City: {{weatherData.city}}</h1>
            <h1>Temperature: {{weatherData.temperature}}</h1>
            <h1>Feels like: {{weatherData.feelsLike}}</h1>
            <h1>Wind Speed: {{weatherData.windSpeed}}</h1>
            <h1>Humidity: {{weatherData.humidity}}</h1>
            <h1>Pressure: {{weatherData.pressure}}</h1>
        </div>
      </div>
    </section>
  `,
  styleUrl: './current-weather-listing.component.css',
})
export class CurrentWeatherListingComponent {

  //Added a bang because weatherData will be defined later on
  @Input() weatherData!: IWeather;

}
