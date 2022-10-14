import { Component, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';
// import {PrimeIcons} from 'primeng/api';
import * as sampletest from '../assets/SampleFileLoad.json'

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
      // sampletest.forEach(x=>{
      //   console.log('test sample RCDID: ', x.RCDID);
      // });    
    }

  ngOninit() {
    //console.log('test sample RCDID: ', sampletest[0].RCDID);
    console.log('NgOnInit??: ');
  }
  
}




