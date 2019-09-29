import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Weather, Social_Info, Place } from './model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public GetData(): Observable<Place[]> {
    let places = [
      new Place('National village','http://www.orenburg.ru/upload/medialibrary/7bd/1_zi.jpg','Russia, Orenburg, Gagarina street',73532560000,'Street', 
        new Weather('Sunny', 'ic1', null, 15),
        new Social_Info('Title','img', 56, 4)
      ),
      new Place('Gotic block', 'https://wikiway.com/upload/iblock/d5f/Vid-na-bulvar-Rambla-s-ploshchadi-Katalonii.jpg','Spain, Barcelona, Rambla',345652355, 'Sight',
        new Weather('Sunny', 'ic2', null, 30),
        new Social_Info('Title','img', 1500, 560)
      )
    ];
    
    return of(places).pipe(delay(3000));
  }
}
