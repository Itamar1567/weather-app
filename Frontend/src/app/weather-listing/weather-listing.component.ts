import { Component, Input } from '@angular/core';
import { IWeather } from '../iweather';

@Component({
  selector: 'app-weather-listing',
  imports: [],
  template: `
    <section class="section-listing">
      <div class="img-container">
        <img src="assets/images/sunny.png" id="weather-image" />
        <div class="img-text-overlay" alt="Day image">
            <h2>{{weatherData.dayType}}</h2>
            <h1>Temperature: {{weatherData.temperature}}</h1>
            <h1>Wind: {{weatherData.windSpeed}}</h1>
        </div>
      </div>
    </section>
  `,
  styleUrl: './weather-listing.css',
})
export class WeatherListingComponent {

  //Added a bang because weatherData will be defined later on
  @Input() weatherData!: IWeather;

}
