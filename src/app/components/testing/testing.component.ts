import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  display;

  constructor(public changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ShowSideBar(event:any){

    //console.log('event: ', event);
    this.display = !this.display;
    this.changeDetectionRef.detectChanges();
    // console.log('event: ', (event.target as HTMLInputElement).value);
  }
}
