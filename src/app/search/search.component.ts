import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Deals } from '../trip.model';
import { FilterPipe } from './filter.pipe'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterContentInit {

  public radioGroupForm: FormGroup;
  dealsList: Deals
  departureList = []
  teste = []
  citiesList:string = ''

  constructor(private tripService: TripService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadTrips()
    this.radioGroupForm = this.formBuilder.group({
      'model': 1
    });
  }

  ngAfterContentInit(){
  }

  loadTrips(){
    this.tripService.getTrips()
      .subscribe(trip => {
        this.dealsList = trip.deals
      })
  }

  compare(city){
    if(city !== this.citiesList){
      this.citiesList = city
      return true
    } else {
      return false
    }
  }

  doSearch(form){
    this.tripService.searchQuery = form
  }

}
