import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//IMPORT HTTP CLIENT MODULE
import { HttpClientModule } from '@angular/common/http';

//Import material module
import { MaterialModule } from './shared/material.module'

//Import the car component
import { WeatherCardComponent } from './shared/components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent //Import component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule //Import module
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
