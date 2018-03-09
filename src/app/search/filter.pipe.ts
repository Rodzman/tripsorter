import { Pipe, PipeTransform } from '@angular/core';
import { TripService } from '../trip.service';
import { Deals } from '../trip.model';


@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

    constructor(private tripService:TripService){}

    transform(items: Deals[], filter): any[] {
        console.log(items,filter)
        if(filter === 'price'){
            this.tripService.sortPrice() 
            return this.tripService.results
        } else if(filter === 'speed'){
            this.tripService.sortSpeed() 
            return this.tripService.results
        }
   }
}