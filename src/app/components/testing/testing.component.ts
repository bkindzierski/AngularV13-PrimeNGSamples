import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IBusinessClassData } from 'src/app/model/IBusinessClass';
import { SearchserviceService } from 'src/app/services/searchservice.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  display;
  data: IBusinessClassData[] =[];
  
  constructor(public changeDetectionRef: ChangeDetectorRef,
    private searchService:SearchserviceService) { }

  ngOnInit(): void {
    this.searchService.getSampleData().subscribe(res => {
      this.data = res;
      //console.log('data,' ,this.data);
    });
  }

  ShowSideBar(event:any){

    //console.log('event: ', event);
    this.display = !this.display;
    this.changeDetectionRef.detectChanges();
    // console.log('event: ', (event.target as HTMLInputElement).value);
  }
  
}
