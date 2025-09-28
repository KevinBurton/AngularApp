import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Makes the service a singleton and available throughout the application
})
export class WeatherService {
  async forecast(latitude: number, longitude: number, ndays: number): Promise<any | null> {
    if(!latitude || !longitude || !ndays) return null;
    return fetch(`https://weather.googleapis.com/v1/forecast/days:lookup?key=AIzaSyAxrr9z3xCFQF0EnawxOCQO7pxosZ1mjAE&location.latitude=${latitude}&location.longitude=${longitude}&days=${ndays}`);
  }
}