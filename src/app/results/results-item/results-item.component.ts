// This component is responsible for the single result box
import { Component, OnInit, Input } from '@angular/core'
import { TripService } from '../../trip.service'
import { SearchQuery, Deals } from '../../trip.model'

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.css']
})
export class ResultsItemComponent implements OnInit {

  // Input data on variables for the component to use
  @Input() query:SearchQuery[] //get the query from form
  @Input() results: Deals[] //get the results from service

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.doQuery() // Execute the query on init
  }

  // Method to get the query from the form (search) and send to service (tripservice) to get the results
  doQuery(){
    this.query = this.tripService.searchQuery //get the query form the form
    this.tripService.listTrips() //call the service method (listTrips) and get the response from the json
    this.results = this.tripService.results //load response on the component variable
  }

}
