import { Injectable } from '@angular/core';

export interface Location {
    lat: number;
    lng: number;
}

@Injectable({
  providedIn: 'root', // Makes the service a singleton and available throughout the application
})
export class LocationService {
  constructor() {}
  async location(city: string): Promise<Location | null> {
    if(!city) return null;
    const response = await fetch (`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyAxrr9z3xCFQF0EnawxOCQO7pxosZ1mjAE`);
    const data = await response.json();
    if(data.status !== 'OK') return null;
    const l = data.results[0].geometry.location;
    return {lat: l.lat, lng: l.lng};
  }
}