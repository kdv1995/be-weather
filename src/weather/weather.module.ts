import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Weather } from './entities/weather.entity';
import { GeneralWeatherSchema } from './schemas/weather.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Weather.name, schema: GeneralWeatherSchema },
    ]),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
