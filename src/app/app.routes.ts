import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { CounterComponent } from './counter/counter.component';
import { WeatherComponent } from './weather/weather.component';
export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'angular',
        component: AngularComponent
    },
    {
        path: 'counter',
        component: CounterComponent
    },
    {
        path: 'weather',
        component: WeatherComponent
    }
];
