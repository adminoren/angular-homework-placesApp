import { Component, Output } from '@angular/core';
import { Place, Weather, Social_Info } from './model';

@Component({
  selector: 'places-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @Output()
  public weather: Weather;

  @Output()
  public social: Social_Info;

  public setSelectedPlace($event: Place) {
    Promise.resolve().then(()=>{
      this.social = $event.social;
      this.weather = $event.weather;
    });
  }
}
