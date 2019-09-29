import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { DataService } from './data.service';
import { AppPlacelistComponent } from './app-placelist/app-placelist.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
   declarations: [
      AppComponent,
      AppPlacelistComponent,
      WeatherComponent,
      SocialComponent,
      HeaderComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      AppMaterialModule
   ],
   providers: [
      DataService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
