import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'TripSorter'; //App title
  slogan:string = 'Search your trip!' //App Slogan
  signature:string = '© Rodzman - 2018' //App signature
}
