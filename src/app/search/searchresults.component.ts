import { Component, Inject, OnInit,ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { IBusinessClassData } from '../model/IBusinessClass';
import { SearchserviceService } from '../services/searchservice.service'
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {
  
  toastKey:string;  
  loading: boolean = true;
  selectedClass: IBusinessClassData;
  data: IBusinessClassData[] =[];
  display;  
  tb1Value:string;
  @ViewChild('tbsearch') tbsearch: ElementRef;
  
  constructor(@Inject(DOCUMENT) public document: Document,
              private searchService: SearchserviceService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    
    //
    setTimeout(() =>{
      this.searchService.getSampleData().subscribe(res => {
        this.data = res;
        this.loading = false;        
        //console.log('data,' ,this.data);
      });
    },1000);    
  }

  selectClass(data: IBusinessClassData) {
    // console.log ('class? ', data.CLASX + ' -- state: ', data.PRMSTE)
    // console.log ('data? ',data);
    //this.toastKey = data.CLASX.toString() + data.PRMSTE;
    //this.messageService.add({key: 'key1', severity:'info', summary:'Class Selected', detail: data.CLASX.toString() + ' - ' + data.DESC});
    this.display = !this.display;
  }

  clear(table: Table) {
    table.clear();
    this.messageService.clear();
    //var tb = this.document.getElementById('tbsearch');   
    //this.tbsearch.nativeElement.value = '';
    this.tb1Value = '';
  }

  // loadSample1() {
	// 	this.sampleService.getSample(this.sample1).subscribe(data => {
	// 		this.ctrQuote = data;
	// 		this.doneLoadData.emit(data);
	// 		//console.log(data);
	// 	});
	// }

}
