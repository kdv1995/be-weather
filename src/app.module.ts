import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    WeatherModule,
    MongooseModule.forRoot('mongodb://localhost/weather'),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development.local', 'env.development', '.env'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
