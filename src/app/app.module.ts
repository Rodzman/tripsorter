import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ResultsComponent } from './results/results.component';
import { SearchComponent } from './search/search.component';
import { ResultsItemComponent } from './results/results-item/results-item.component';
import { TripService } from './trip.service';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FilterPipe} from './search/filter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultsComponent,
    SearchComponent,
    ResultsItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
