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
  
  first = 0;
  rows = 25;
  pagingPosition = 'bottom';
  toastKey:string;  
  loading: boolean = true;
  selectedClass: IBusinessClassData;
  data: IBusinessClassData[] =[];
  display;  
  tb1Value:string;
  adminUser = false;
  //form values
  description = ''; 
  state = '';
  effdte = '';
  mktsgt = '';
  classCode = '';
  sicCode = '';
  bopcls = '';
  garcls = '';
  MAPColorValue = 'R';
  MapClassGuidelines = '';
  MAPAutoRepairColor = '';
  MAPAutoRepairClassGuidelines = '';
  WorkersCompColor = '';
  WorkersCompClassGuidelines = '';
  PropertyColor = '';
  PropertyClassGuidelines = '';
  LiabilityColor = '';
  LiabilityClassGuidelines = '';
  AutoColor = '';
  AutoClassGuidelines = '';
  UmbrellaColor = '';
  UmbrellaClassGuidelines = '';
  CTRColor = '';
  CTRClassGuidelines = '';
  //dropdown options 
  desirabilityOptions: DesirabilityOptions[] =[];   
  

  @ViewChild('tbsearch') tbsearch: ElementRef;
  
  constructor(@Inject(DOCUMENT) public document: Document,
                                private searchService: SearchserviceService,
                                private messageService: MessageService) { 
                
      this.desirabilityOptions = [
        {name: 'None', value: ''},
        {name: 'Green', value: 'G'},
        {name: 'Yellow', value: 'Y'},
        {name: 'Red', value: 'R'}
      ];     
  }

  ngOnInit(): void {
    
    this.searchService.getSampleData().subscribe(res => {
      this.data = res;
      this.loading = false;        
      //console.log('data,' ,this.data);
    });
    //
    // setTimeout(() =>{
    //   this.searchService.getSampleData().subscribe(res => {
    //     this.data = res.filter(item=>item.ENDDTE!=0)
    //     this.loading = false;        
    //     //console.log('data,' ,this.data);
    //   });
    // },2000);     
    this.loading = true;  
  }

  selectClass(data: IBusinessClassData) {
    
    this.selectedClass = data;
    this.display = !this.display;
    this.description = data.DESC;
    this.state = data.PRMSTE.toString();
    this.effdte = data.EFFDTE.toString();
    this.mktsgt = data.MAPMS;
    this.classCode = data.CLASX.toString();
    this.sicCode = data.SICCDE.toString();
    this.bopcls = data.MAPCLS;
    this.garcls = data.AUTCLS;
    this.MAPColorValue = data.MAPDSR.trim();
    this.MapClassGuidelines = data.MAPCMT;
    this.MAPAutoRepairColor=  data.AUTDSR.trim();
    this.MAPAutoRepairClassGuidelines = data.AUTCMT;
    this.WorkersCompColor = data.WCDSR.trim();
    this.WorkersCompClassGuidelines = data.WCCMT;
    this.PropertyColor = data.PROPDSR.trim();
    this.PropertyClassGuidelines = data.PROPCMT;
    this.LiabilityColor = data.GLDSR.trim();
    this.LiabilityClassGuidelines = data.GLCMT;
    this.AutoColor = data.CAUTDSR.trim();
    this.AutoClassGuidelines = data.CAUTCMT;
    this.UmbrellaColor = data.CUPDSR.trim();
    this.UmbrellaClassGuidelines = data.CUPCMT;
    this.CTRColor = data.CTRDSR.trim();
    this.CTRClassGuidelines = data.CTRCMT;
    //this.toastKey = data.CLASX.toString() + data.PRMSTE;
    //this.messageService.add({key: 'key1', severity:'info', summary:'Class Selected', detail: data.CLASX.toString() + ' - ' + data.DESC});
   
  }
  AZclicked(letter: string){
    this.loading = true;
    this.searchService.getSampleData().subscribe(res => {
      this.data = res.filter(item=>item.DESC.charAt(0) == letter)
      this.loading = false; 
    });
    //this.data = this.data.filter(x=>x.DESC.charAt(0) === letter);
  }
  clear(table: Table) {
    table.clear();
    this.messageService.clear();
    //var tb = this.document.getElementById('tbsearch');   
    //this.tbsearch.nativeElement.value = '';
    if(this.tb1Value === ''){
     this.ngOnInit();   
    }
    this.tb1Value = '';
  }
  next() {
    this.first = this.first + this.rows;
}

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
    //console.log('data length? ', this.data.length);
    return this.data ? this.first === (this.data.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.data ? this.first === 0 : true;
  }

  
  createAZlinks(): String[] {
    var letters: String[] = [];

    for (var i = 65; i <= 90; i++) {
        letters.push(String.fromCharCode(i));
    }
    return letters;
  }
}
interface DesirabilityOptions {
  name: string,
  value: string
}