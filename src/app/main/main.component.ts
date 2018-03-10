import { Component, OnInit } from '@angular/core'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }
  
  title:string = this.appComponent.title //loads the app title from the appcomponent
  slogan:string = this.appComponent.slogan //loads the slogan from the appcomponent
  signature:string = this.appComponent.signature //loads the signature from the appcomponent

  ngOnInit() {
    
  }

}
