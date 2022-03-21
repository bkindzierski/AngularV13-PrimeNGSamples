import { Component, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';
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
  loading = true;

  constructor(public changeDetectionRef: ChangeDetectorRef,
    private messageService: MessageService)  { 

    }

  ngOninit() {
    
  }
  
}




