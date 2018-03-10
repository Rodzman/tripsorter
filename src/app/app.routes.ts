import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { MainComponent } from './main/main.component'
import { ResultsComponent } from './results/results.component'
import { SearchComponent } from './search/search.component'
import { ResultsItemComponent } from './results/results-item/results-item.component'

// Let's export our app routes
export const appRoutes: Routes = [
  { path: '', component: MainComponent }, //rout for the main component, the one that shows the initial page
  { path: '', redirectTo: '/main', pathMatch: 'full' },//this defines the main as the home page
  { path: 'results', component: ResultsComponent }, //rout for the results component, a collection of the results items
  { path: 'results/result', component: ResultsItemComponent }, //rout for the item, the box that holds the single result
  { path: 'search', component: SearchComponent } //rout to the search component, the one responsible for the initial form
];
