import { Component, inject, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IWeather } from '../iweather';
import { CurrentWeatherListingComponent } from '../current-weather-listing.component/current-weather-listing.component';
import { WeatherService } from '../weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-current.component',
  imports: [CurrentWeatherListingComponent, CommonModule, FormsModule],
  template: `
    <section class="section-title">
      <header><h1 id="title">Current Weather</h1></header>
      <input placeholder="Enter city name" type="text" (keydown.enter)="onEnter()" [(ngModel)]="city"/>
      <p>{{message}}</p>
    </section>
    <section class="section-showcase">
      <img alt="day-type-img" src="assets/images/rain.png" id="weather-image" />
      <section class="section-images">
        <app-current-weather-listing
          *ngFor="let weatherListing of weatherArray"
          [weatherData]="weatherListing"
        ></app-current-weather-listing>
      </section>
    </section>
  `,
  styleUrl: './current.component.css',
})
export class CurrentComponent {

  city:string = '';
  message:string = '';
  weatherService: WeatherService = inject(WeatherService);
  private detector: ChangeDetectorRef = inject(ChangeDetectorRef);
  //temp array for testing
  weatherArray: IWeather[] = []; 

  async onEnter(){
     
   
    this.weatherArray = [];

    const weatherData = await this.weatherService.getWeatherForSingleDayByCity(this.city);

    if(weatherData == null)
    {
      this.message = 'Could not find provided city';
    }
    else
    {
      this.weatherArray.push(await this.weatherService.getWeatherForSingleDayByCity(this.city));
      this.message = '';
    }

     this.detector.detectChanges();
    
  }
  
}
