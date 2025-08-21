import { Injectable } from '@angular/core';
import { IWeather } from './iweather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  days: string[] = ["Sunday","Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday" ];
  async getWeatherForCity(city: string): Promise<any> {
    try {
      const response = await fetch(`http://localhost:5121/weather/${city}`);
      if (!response.ok) {
        console.log('Entered !response');
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

  async getForecastForCity(city: string): Promise<any> {
    try {
      const response = await fetch(`http://localhost:5121/forecast/${city}`);
      if (!response.ok) {
        console.log('Entered !response');
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

  async getWeatherForSingleDayByCity(city: string): Promise<any> {
    let weatherData: IWeather;

    try {
      const data = await this.getWeatherForCity(city);

      console.log(data.name);
      weatherData = {
        id: 0,
        temperature: data.main.temp,
        windSpeed: data.wind.speed,
        dayType: data.weather[0].main,
        dayImg: 'assets/images/blank.png',
        city: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
      };
      return weatherData;
    } catch (error) {
      console.log('Network error:', error);
      return null;
    }
  }

  //Get Forecast for middle of the day 5 days
  async getFiveDayWeatherForCity(city: string): Promise<any> {
    const forecastArray: IWeather[] = [];
    try {
      const data = await this.getForecastForCity(city);
      //Time by 1000 because Date converts via miliseconds not seconds
      let date = new Date(data.list[0].dt * 1000);
      let tempSum: number = 0;
      let ttlCount: number = 0;
      let windSum: number = 0;

      for (let i = 0; i < data.list.length; i++) {
        let iterativeDate = new Date(data.list[i].dt * 1000);

        if (date.getDay() != iterativeDate.getDay()) {
          

          forecastArray.push({
            id: 0,
            temperature: this.getAverage(tempSum, ttlCount) + "C",
            windSpeed: this.getAverage(windSum, ttlCount) + "m/s",
            dayType: data.list[i].weather[0].main,
            dayImg: `assets/images/${(data.list[i].weather[0].main).toLowerCase()}.png` || "blank.png",
            day: this.days[date.getDay()]
          });

          date = new Date(data.list[i].dt * 1000);
          tempSum = 0;
          windSum = 0;
          ttlCount = 0;
        }
        if (date.getDay() == iterativeDate.getDay()) {
          tempSum += data.list[i].main.temp;
          windSum += data.list[i].wind.speed;
          ttlCount += 1;
        }
      }

      return forecastArray;

    } catch (error) {
      console.log('Failed to assign forecast: ', error);
    }
  }

  getAverage(sum: number, totalCount: number) {
    return (sum / totalCount).toFixed(2);
  }
}
