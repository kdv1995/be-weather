interface Coordination {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Clouds {
  all: number;
}



export interface IGeneralWeather {
  coord: Coordination;
  weather: Weather[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  timeZone: number;
  id: number;
  name: string;
  cod: number;
  dayOfWeek?: string; // Include this to store the day of the week
}
