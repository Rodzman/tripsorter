// This component is responsible for showing the query results
import { Component, OnInit, Input } from '@angular/core'
import { TripService } from '../trip.service'
import { SearchQuery, Deals } from '../trip.model'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() query:SearchQuery[] //get the query from form
  
  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.query = this.tripService.searchQuery //get the query from the service on init
  }
 
}