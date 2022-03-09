import { Component, ChangeDetectorRef } from '@angular/core';
// import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NpmLocalTest';
  date1: Date;
  display;

  constructor(public changeDetectionRef: ChangeDetectorRef)  { }

  ngOninit() {

    //throw new Error('Function not implemented.');
    
  }
  
 
}




