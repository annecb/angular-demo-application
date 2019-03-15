import { Component } from '@angular/core';
import { WeatherService } from './shared/services/weather.service'
import { Weather } from './shared/models/weather'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public weatherResult: Weather;
  public city: string;

  constructor(private weatherService: WeatherService) {
  }

  public getCityWeather() {
    this.weatherService.getCityWeather(this.city).subscribe(result => this.weatherResult = result);
  }

}


