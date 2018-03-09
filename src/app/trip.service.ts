import { Injectable, Output } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Http, HttpModule, Jsonp } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/switchMap'
import { SearchQuery, Deals } from './trip.model';

@Injectable()
export class TripService {

  @Output() results:Deals[];
  apiURL:string = '../assets/response.json'
  searchQuery:SearchQuery[] = []

  constructor(private http:Http) { 
    this.results = [];
   }

  getTrips():Observable<any>{
    return this.http.get(this.apiURL)
      .map(res=>res.json())
  }

  listTrips(){
    return this.getTrips()
      .subscribe(trip => {
        this.results = trip.deals
      })
  }

  sortSpeed() {
    this.results
      .sort((a: Deals, b:Deals) => {
        return a.duration.m.valueOf() - b.duration.m.valueOf()
      })
      .sort((a: Deals, b:Deals) => {
        return a.duration.h.valueOf() - b.duration.h.valueOf()
      })
  }

  sortPrice() {
    this.results
      .sort((a: Deals, b: Deals) => {
        console.log(a.cost)
        return a.cost.valueOf() - b.cost.valueOf()
      })
  }



}
