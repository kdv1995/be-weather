import { IGeneralWeather } from '../interfaces/weather.interface';
export class CreateWeatherDto implements IGeneralWeather {
  coord: { lon: number; lat: number };
  weather: { id: number; main: string; description: string; icon: string }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: { speed: number; deg: number; gust: number };
  clouds: { all: number };
  dt: number;
  timeZone: number;
  id: number;
  name: string;
  cod: number;
  dayOfWeek?: string;
}
