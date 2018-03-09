import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';

export const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'results', component: ResultsComponent },
  { path: 'search', component: SearchComponent }
];
