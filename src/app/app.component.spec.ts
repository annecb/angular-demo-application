import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WeatherService } from './shared/services/weather.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MaterialModule } from './shared/material.module'
import { WeatherCardComponent } from './shared/components/weather-card/weather-card.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WeatherCardComponent
      ],
      providers: [WeatherService],
      imports: [HttpClientTestingModule, MaterialModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.debugElement.nativeElement.style.visibility = "hidden";
    expect(app).toBeTruthy();
  });
});