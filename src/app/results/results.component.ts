import { Component, OnInit, Input } from '@angular/core';
import { TripService } from '../trip.service';
import { SearchQuery, Deals } from '../trip.model';
import { FilterPipe } from '../search/filter.pipe'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() query:SearchQuery[]
  @Input() results: Deals[]

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.doQuery()
    console.log(this.query)
  }

  doQuery(){
    this.query = this.tripService.searchQuery
    this.tripService.listTrips()
    this.results = this.tripService.results
  }

}
