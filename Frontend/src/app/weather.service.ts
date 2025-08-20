import { Injectable } from '@angular/core';
import { IWeather } from './iweather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  async getWeatherForCity(city: string): Promise<any> {
    try {
      const response = await fetch(`http://localhost:5121/weather/${city}`);
      if (!response.ok) {
        console.log("Entered !response")
        console.log('Could not fetch: ', response.status, response.statusText);
        return null;
      } else {
        return await response.json();
      }
    } catch (error) {
      console.error('Network error:', error);
      return null;
    }
  }

  async getWeatherForSingleDayByCity(city: string): Promise<IWeather>{

    let weatherData: IWeather;
    const data = await this.getWeatherForCity(city);
    console.log(data.name);
    weatherData = {
      id: 0,
      temperature: data.main.temp,
      windSpeed: data.wind.speed,
      dayType: data.weather[0].main,
      dayImg: "assets/images/blank.jpeg",
      city: data.name,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like
      


    };
    return weatherData;
    
  }
    
    

}

