import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardComponent } from './weather-card.component';
import { MaterialModule } from './../../material.module'

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCardComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    component.weatherData = {
      current: {
        last_updated_epoch: 1552567517,
        last_updated: "2019-03-14 13:45",
        temp_c: 10.0,
        temp_f: 50.0,
        is_day: 1,
        condition: {
          text: "Light rain",
          icon: "//cdn.apixu.com/weather/64x64/day/296.png",
          code: 1183
        },
        wind_mph: 21.7,
        wind_kph: 34.9,
        wind_degree: 250,
        wind_dir: "WSW",
        pressure_mb: 1010.0,
        pressure_in: 30.3,
        precip_mm: 1.9,
        precip_in: 0.07,
        humidity: 87,
        cloud: 75,
        feelslike_c: 6.3,
        feelslike_f: 43.3,
        uv: 3.0
      },
      location: {
        name: "Paris",
        region: "Ile-de-France",
        country: "France",
        lat: 48.87,
        lon: 2.33,
        tz_id: "Europe/Paris",
        localtime_epoch: 1552568642,
        localtime: "2019-03-14 14:04"
      }
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
