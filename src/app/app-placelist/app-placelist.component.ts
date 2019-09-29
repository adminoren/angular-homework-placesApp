import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Place } from '../model';
import { DataService } from '../data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-placelist',
  templateUrl: './app-placelist.component.html',
  styleUrls: ['./app-placelist.component.css']
})
export class AppPlacelistComponent implements OnInit, OnDestroy {

  constructor(private repository: DataService) {
  }

  public places$: Observable<Place[]>;
  public types: string[];

  public selectedPlace: Place;

  @Output()
  public selectedPlaceChanged: EventEmitter<Place> = new EventEmitter();

  private subscription: Subscription;

  public setSelectedPlace(place: Place) {
    this.selectedPlace = place;
    this.selectedPlaceChanged.emit(this.selectedPlace);
  }

  ngOnInit() {
    this.places$ = this.repository.GetData();

    this.subscription = this.places$.subscribe((places) => {
      if (places.length > 0){
        this.setSelectedPlace(places[0]);
      }

      this.types = [...new Set(places.map((p) => { return p.type }))];
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
