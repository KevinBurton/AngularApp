import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { tap } from 'rxjs/operators';

// Define an interface for your application configuration
interface AppConfig {
    locationApiBaseUrl: string,
    weatherApiBaseUrl: string,
    locationApiKey: string,
    weatherApiKey: string
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: AppConfig | null = null;
  constructor(private http: HttpClient) {}
    loadConfig(): Promise<AppConfig> {
      return firstValueFrom(
        this.http.get<AppConfig>('/assets/config.json').pipe(
          tap(config => {
            this.config = config;
            console.log('Application configuration loaded:', this.config);
          })
        )
      );
    }
    getConfig() : AppConfig | null {
        return this.config;
    }
}
