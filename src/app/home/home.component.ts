import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconURL: string = '';
  city: string = 'Chennai';
  units: string = 'imperial';

  constructor(private homeService: HomeService) { }

    ngOnInit():void {
      this.homeService.getweather(this.city, this.units).subscribe({

        next: (res)=> {
          console.log(res);
          this.myWeather = res;
          console.log(this.myWeather);
          this.temperature = this.myWeather.main.temp;
          this.feelsLikeTemp = this.myWeather.main.feels_like;
          this.humidity = this.myWeather.main.humidity;
          this.pressure = this.myWeather.main.pressure;
          this.summary = this.myWeather.weather[0].main;

          this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png'
        },

        error:(error)=> console.log(error.message),

        complete: ()=> console.info("API call completed")
        })
        
      }
}
  

function ngOnInit() {
  throw new Error('Function not implemented.');
}

