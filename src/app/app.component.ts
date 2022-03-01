import { Component, ChangeDetectorRef } from '@angular/core';


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

    throw new Error('Function not implemented.');
    
  }
  
  ShowSideBar(event:any){

    console.log('event: ', event);
    this.display = !this.display;
    this.changeDetectionRef.detectChanges();
    // console.log('event: ', (event.target as HTMLInputElement).value);
  }
}




