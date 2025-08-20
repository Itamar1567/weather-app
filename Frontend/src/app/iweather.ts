export interface IWeather {
    id: number;
    temperature: number;
    windSpeed: number;
    dayType: string;
    dayImg?: string;
    city?: string;
    feelsLike?: number;
    humidity?: number;
    pressure?: number;

}
