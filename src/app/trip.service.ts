import { Injectable, Output } from '@angular/core'
import { Http, HttpModule, Jsonp } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { SearchQuery, Deals } from './trip.model'
import "rxjs/add/operator/map"
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/switchMap'

@Injectable()
export class TripService {

  @Output() results:Deals[]; //output for the results
  apiURL:string = '../assets/response.json' //json response address
  searchQuery:SearchQuery[] = [] //variable declared to get the query

  constructor(private http:Http) { 
    this.results = [];
  }

  // Method that creates an observable to watch the json file and map the results
  getTrips():Observable<any>{ //create the observable
    return this.http.get(this.apiURL) //get the json
      .map(res=>res.json()) //map the response
  }

  // Method that subscribe the observable and prepare the results
  listTrips(){
    return this.getTrips() //call the method to get the response
      .subscribe(trip => { //subscribe the response
        this.results = trip.deals //load values to the results variable
      })
  }

  // Method that sorts the results by speed
  sortSpeed() {
    this.results
      .sort((a: Deals, b:Deals) => { //sort to get the duration sorted by minutes
        return a.duration.m.valueOf() - b.duration.m.valueOf() //return the results sorted by minutes
      })
      .sort((a: Deals, b:Deals) => { //sort to get the duration sorted by hours
        return a.duration.h.valueOf() - b.duration.h.valueOf() //return the results sorted by hours
      })
  }

  // Method that sorts the results by price
  sortPrice() {
    this.results
      .sort((a: Deals, b: Deals) => { //sort to get the costs sorted by the cheapest
        return a.cost.valueOf() - b.cost.valueOf() //return the results sorted by costs
      })
  }

}
