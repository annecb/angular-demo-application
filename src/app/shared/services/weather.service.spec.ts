import { TestBed, inject } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Weather } from '../models/weather'

describe('WeatherService', () => {
  let weatherService: WeatherService;
  let httpMock: HttpTestingController;

  //Before each tests, we store the service and the httpmock in variables
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService],
      imports: [HttpClientTestingModule]
    });

    weatherService = TestBed.get(WeatherService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should get weather for a given city', () => {
    //Fake object matching the result of the HTTP call
    const resultWeather: Weather = {
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

    //We call the service
    weatherService.getCityWeather('paris').subscribe(weather => {
      expect(weather).toBeDefined();
      expect(weather).toBe(resultWeather);
    })

    // We set the expectations for the HttpClient mock
    const req = httpMock.expectOne(`${weatherService.weather_api_url}?key=${weatherService.apiKey}&q=paris`);
    expect(req.request.method).toBe("GET");

    // Then we set the fake data to be returned by the mock
    req.flush(resultWeather);
  });

  //Check after each tests if there are not outstanding HTTP calls
  afterEach(() => {
    httpMock.verify();
  });
});


