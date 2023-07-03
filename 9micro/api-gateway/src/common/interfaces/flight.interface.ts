import { ISoftware } from 'src/common/interfaces/software.interface';
import { IWeather } from './weather.interface';
export interface IFlight {
  _id?: string;
  pilot: string;
  airplane: string;
  destinationCity: string;
  flightDate: Date;
  passengers: ISoftware[];
  weather: IWeather[];
}
