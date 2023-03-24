import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  url1 ='https://api.openweathermap.org/data/2.5/weather?q='
  url2 = '&appid=d85d6b62cd5b3d11e07f09beffd5f12b&units=metric'

  constructor(private http:HttpClient) {  }

  getWeatherData(){
    return this.http().get()
  }
}
