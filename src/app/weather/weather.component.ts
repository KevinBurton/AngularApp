import { Component, OnInit, signal } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { LocationService, Location } from '../services/location.service';

interface City {
  id: number;
  name: string;
}
@Component({
  standalone: true,
  selector: 'app-weather',
  templateUrl: './weather.html',
  styleUrl: './weather.css'
})
export class WeatherComponent implements OnInit {
  protected readonly title = signal('Weather Page');
  selectedCity: string = 'Madison, WI'; // Initial value
  latlng: Location | null = null; 
  forecast: any | null = null;
  cities: City[] = [
    { id: 1, name: 'Madison, WI' },
    { id: 2, name: 'Seattle' },
    { id: 3, name: 'San Francisco' },
    { id: 4, name: 'New York' },
    { id: 5, name: 'Chicago' },
    { id: 6, name: 'Los Angeles' },
    { id: 7, name: 'Miami' },
    { id: 8, name: 'Austin' },
    { id: 9, name: 'Denver' },
    { id: 10, name: 'Boston' },
    { id: 11, name: 'Atlanta' },
    { id: 12, name: 'London' },
    { id: 13, name: 'Paris' }
  ];

  constructor(private location: LocationService, private weather: WeatherService) { 
  }

  ngOnInit(): void {
    const self = this;
    this.location.location(this.selectedCity)
      .then(loc => {      
        self.latlng = loc;
        if(loc && loc.lat && loc.lng) {
        self.weather.forecast(loc.lat, loc.lng, 4)
          .then(r => {
              r.json().then((f: any) => {;
                self.forecast = f;  
              });
          });
        }
      });
  }
  fahrenheit(celsius: number) {
    return (celsius * 9/5) + 32;
  }

  onSelectionChange (e: Event) {
    const self = this;
    this.selectedCity = (e.target as HTMLSelectElement).value;
    this.location.location(this.selectedCity)
      .then(loc => {
        self.latlng = loc;
        if(loc && loc.lat && loc.lng) {
          self.weather.forecast(loc.lat, loc.lng, 4)
            .then(r => {
              r.json().then((f: any) => {;
                self.forecast = f;  
              });
          });
        }      
      });
  } 
}
