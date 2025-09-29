import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

export interface Location {
    lat: number;
    lng: number;
}

@Injectable({
  providedIn: 'root', // Makes the service a singleton and available throughout the application
})
export class LocationService {
  constructor(private config: ConfigService) {}
  async location(city: string): Promise<Location | null> {
    if(!city) return null;
    const response = await fetch (`${this.config.getConfig()?.locationApiBaseUrl}?address=${city}&key=${this.config.getConfig()?.locationApiKey}`);
    const data = await response.json();
    if(data.status !== 'OK') return null;
    const l = data.results[0].geometry.location;
    return {lat: l.lat, lng: l.lng};
  }
}