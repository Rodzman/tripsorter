import { Pipe, PipeTransform } from '@angular/core';
import { TripService } from '../trip.service';
import { Deals } from '../trip.model';

@Pipe({
  name: 'filter' //filter name 
})

export class FilterPipe implements PipeTransform {

    constructor(private tripService:TripService){}

    // pipe that gets the sort type, call the respective method on the service and returns the results
    transform(items: Deals[], filter): any[] {
        if(filter === 'cheapest'){ //this gets the cheapest filter
            this.tripService.sortPrice() //method on serice that sorts by price
            return this.tripService.results //return the list
        } else if(filter === 'fastest'){ //this gets the fastest filter
            this.tripService.sortSpeed()  //method on service that sorts by speed
            return this.tripService.results //return the list
        }
   }
}