import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  private _appId = environment.api.openweather;

  constructor(
    private _http: HttpClient
  ) { }

  get({latitude, longitude}: {latitude: number, longitude: number}) {

    // return this._http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this._appId}&units=metric`);
    // return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=57f418f213db4f946aedb7245126b2d8`);
    // return this._http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${this._appId}`);
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=57f418f213db4f946aedb7245126b2d8&units=metric`);
  }
}
