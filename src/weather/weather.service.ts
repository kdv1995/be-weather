import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWeatherDto } from './dto/create-weather.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Weather } from './entities/weather.entity';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { generateDayOfWeek } from './utils';
import { IGeneralWeather } from './interfaces/weather.interface';

@Injectable()
export class WeatherService {
  private readonly OPEN_WEATHER_API_KEY = this.configService.get(
    'OPEN_WEATHER_API_KEY',
  );
  private readonly API_BASE_URL = this.configService.get('API_BASE_URL');

  constructor(
    @InjectModel(Weather.name) private weatherModel: Model<IGeneralWeather>,
    private configService: ConfigService,
  ) {}

  async findOneHundredLatest() {
    return this.weatherModel.find().sort({ dt: -1 }).limit(100).exec();
  }

  async create(createWeatherDto: CreateWeatherDto) {
    const createdWeather = new this.weatherModel(createWeatherDto);
    return createdWeather.save();
  }

  findAll() {
    return this.weatherModel.find().exec();
  }

  async findOne(cityName: string) {
    try {
      const url = `${this.API_BASE_URL}/weather?q=${cityName}&appid=${this.OPEN_WEATHER_API_KEY}`;

      const response = await fetch(url);
      const data = (await response.json()) as IGeneralWeather;

      if (!data || !data.dt) {
        throw new Error('Invalid weather data received');
      }

      const dayOfWeek = generateDayOfWeek(data.dt);
      const weather = { ...data, dayOfWeek };

      const savedWeather = await this.create(weather);
      return savedWeather;
    } catch (error) {
      throw new NotFoundException('City not found');
    }
  }

  remove(id: number) {
    return `This action removes a #${id} weather`;
  }
}
