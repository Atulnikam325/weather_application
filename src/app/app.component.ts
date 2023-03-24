import { Component } from '@angular/core';
import { WeatherServiceService } from './weather-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather_application';
  data:any;

  constructor(private weather : WeatherServiceService){}

  getWeatherDetails(city:any){
    this.weather.getWeatherData(city).subscribe((res)=>{
      console.log(res)
      this.data = res
    })
  }
}
