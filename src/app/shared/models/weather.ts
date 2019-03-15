//Data models
export class Weather {
    public current: CurrentWeather;
    public location: LocationWeather;
}

export class CurrentWeather {
    public last_updated: string;
    public last_updated_epoch: number;
    public temp_c: number;
    public temp_f : number;
    public feelslike_c: number;
    public feelslike_f: number;
    public condition : ConditionWeather;
    public wind_mph: number;
    public wind_kph: number;
    public wind_degree: number;
    public wind_dir: string;
    public pressure_mb: number;
    public pressure_in: number;
    public precip_mm: number;
    public precip_in: number;
    public humidity: number;
    public cloud: number;
    public is_day: number;
    public uv: number;
}

export class ConditionWeather {
    public code: number;
    public icon: string;
    public text: string;
}

export class LocationWeather {
    public country: string;
    public lat: number;
    public name: string;
    public region: string;
    public lon: number;
    public tz_id: string;
    public localtime_epoch: number;
    public localtime: string;
}