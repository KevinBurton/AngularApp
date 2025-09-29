import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root', // Makes the service a singleton and available throughout the application
})
export class WeatherService {
  constructor(private config: ConfigService) {}
  async forecast(latitude: number, longitude: number, ndays: number): Promise<any | null> {
    if(!latitude || !longitude || !ndays) return null;
    return fetch(`${this.config.getConfig()?.weatherApiBaseUrl}?key=${this.config.getConfig()?.weatherApiKey}&location.latitude=${latitude}&location.longitude=${longitude}&days=${ndays}`);
  }
}