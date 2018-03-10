import { Component, OnInit, AfterContentInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { TripService } from '../trip.service'
import { Deals } from '../trip.model'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterContentInit {

  public radioGroupForm: FormGroup; //declare the input
  dealsList: Deals //declare the variable that get the results list
  citiesList:string = '' //declare the cities

  constructor(private tripService: TripService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadTrips() //let's call the method that gets the list from the json
    this.radioGroupForm = this.formBuilder.group({ //let's build the radio group
      'model': 1
    });
  }

  ngAfterContentInit(){
  }

  // method the loads the json list to populate the selects
  loadTrips(){
    this.tripService.getTrips() //call the service method that observes the json
      .subscribe(trip => { //subscribe the response
        this.dealsList = trip.deals //load the results to the variable
      })
  }

  // method to compare each response item to filter the repeated cities
  compare(city):boolean{ //get the city and return a boolean result
    if(city !== this.citiesList){ //compare the city with the previous stored city
      this.citiesList = city //updates the city variable
      return true //if the city does not match, returns true to print the city on the select element
    } else {
      return false //f the city matches, returns false to print the city on the select element
    }
  }

  // method that gets the form query and sends to the trip service
  doSearch(form){
    this.tripService.searchQuery = form
  }

}
