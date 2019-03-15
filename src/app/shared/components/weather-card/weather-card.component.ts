import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../models/weather'

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherData: Weather; //Input component

  constructor() { }

  ngOnInit() {
  }

}
