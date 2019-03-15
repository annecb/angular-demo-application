import { Injectable, ɵisObservable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weather } from '../models/weather'
//Import HTTPCLIENT
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //FREE JSON API : https://www.apixu.com/api-explorer.aspx
  //You need to provide your API KEY here
  public apiKey: string = "[YOUR_API_KEY]";
  public weather_api_url: string = "http://api.apixu.com/v1/current.json"

  //Inject HTTPCLIENT
  constructor(private http: HttpClient) { }

  public getCityWeather(city: string): Observable<Weather> {
    //We build the URL with the query params : Key (apiKey) and q (= city name)
    var build_url = `${this.weather_api_url}?key=${this.apiKey}&q=${city}`

    return this.http.get(build_url)
      .pipe(
      map(response => (response as Weather))
      );
  }
}
