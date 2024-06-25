import { Controller, Get, Param, Delete, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('latest')
  findOneHundredLatest() {
    return this.weatherService.findOneHundredLatest();
  }

  @Get()
  findAll() {
    return this.weatherService.findAll();
  }

  @Get('city')
  async findOne(@Query('name') cityName: string) {
    return await this.weatherService.findOneByCityName(cityName);
  }
  @Get('coordinates')
  async findOneByCoordinates(
    @Query('lat') lat: string,
    @Query('lon') lon: string,
  ) {
    return await this.weatherService.findOneByCoordinates(lat, lon);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weatherService.remove(+id);
  }
}
