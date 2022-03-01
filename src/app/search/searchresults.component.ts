import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IBusinessClassData } from '../model/IBusinessClass';
import { SearchserviceService } from '../services/searchservice.service'

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  data: IBusinessClassData[] =[];
  toastKey:string;
  selectedClass: IBusinessClassData;

  constructor(private searchService: SearchserviceService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    
    //
    this.searchService.getSampleData().subscribe(res => {
      this.data = res;
      //console.log('data,' ,this.data);
    });
  }

  selectClass(data: IBusinessClassData) {
    console.log ('class? ', data.CLASX + ' -- state: ', data.PRMSTE)
    console.log ('data? ',data);
    this.toastKey = data.CLASX.toString() + data.PRMSTE;
    this.messageService.add({key: 'key1', severity:'info', summary:'Class Selected', detail: data.CLASX.toString() + ' - ' + data.DESC});
  }

  clear() {
    this.messageService.clear();
  }

  // loadSample1() {
	// 	this.sampleService.getSample(this.sample1).subscribe(data => {
	// 		this.ctrQuote = data;
	// 		this.doneLoadData.emit(data);
	// 		//console.log(data);
	// 	});
	// }

}
