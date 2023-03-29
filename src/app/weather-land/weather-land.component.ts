import { Component } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-weather-land',
  templateUrl: './weather-land.component.html',
  styleUrls: ['./weather-land.component.scss']
})
export class WeatherLandComponent {
  data:any;

  constructor(private weather :WeatherServiceService){}

  getWeatherDetails(city:any){
    this.weather.getWeatherData(city).subscribe((res)=>{
      console.log(res)
      this.data = res
    })
  }
    
}

