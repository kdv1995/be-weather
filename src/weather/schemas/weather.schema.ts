import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GenWeatherDocument = HydratedDocument<GeneralWeather>;

@Schema()
export class GeneralWeather {
  @Prop({ type: Number })
  lon: number;
  @Prop({ type: Number })
  lat: number;

  @Prop({
    type: [
      {
        id: Number,
        main: String,
        description: String,
        icon: String,
      },
    ],
  })
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];

  @Prop()
  base: string;

  @Prop({
    type: {
      temp: Number,
      feels_like: Number,
      temp_min: Number,
      temp_max: Number,
      pressure: Number,
      humidity: Number,
    },
  })
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };

  @Prop({ type: Number })
  visibility: number;

  @Prop({
    type: {
      speed: Number,
      deg: Number,
      gust: Number,
    },
  })
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };

  @Prop({
    type: {
      all: Number,
    },
  })
  clouds: {
    all: number;
  };

  @Prop({ type: Number })
  dt: number;

  @Prop({ type: Number })
  timeZone: number;

  @Prop({ type: Number })
  id: number;

  @Prop({ type: String })
  name: string;

  @Prop({ type: Number })
  cod: number;

  @Prop({ type: String })
  dayOfWeek?: string;
}

export const GeneralWeatherSchema =
  SchemaFactory.createForClass(GeneralWeather);
