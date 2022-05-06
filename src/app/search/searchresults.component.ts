import { Component, Inject, OnInit,ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { IBusinessClassData } from '../model/IBusinessClass';
import { SearchserviceService } from '../services/searchservice.service'
import { DOCUMENT } from "@angular/common";
import { AppComponent } from 'src/app/app.component'
import { PrimeNGConfig,FilterMatchMode,LazyLoadEvent } from 'primeng/api';

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
  stateslist: any[];
  mktsegs: any [];
  desirabilityOptions: DesirabilityOptions[] =[];   
  

  @ViewChild('tbsearch') tbsearch: ElementRef;
  
  constructor(@Inject(DOCUMENT) public document: Document,
                                private searchService: SearchserviceService,
                                private messageService: MessageService,
                                private app: AppComponent,
                                private cd: ChangeDetectorRef, 
  private config: PrimeNGConfig) { 
                
      this.desirabilityOptions = [
        {name: 'None', value: ''},
        {name: 'Green', value: 'G'},
        {name: 'Yellow', value: 'Y'},
        {name: 'Red', value: 'R'}
      ];     
      this.stateslist = [
        {label: 'MA', value: 'MA'},
        {label: 'MI', value: 'MI'},
        {label: 'NH', value: 'NH'},
        {label: 'NJ', value: 'NJ'},
        {label: 'NY', value: 'NY'},
        {label: 'OH', value: 'OH'},
        {label: 'PA', value: 'PA'},
        {label: 'VT', value: 'VT'}
    ]
    this.mktsegs = [
      // {label: 'INPR', value: 'INPR'},
      // {label: 'INST', value: 'INST'},
      // {label: 'MERC', value: 'MERC'}
      // {label: 'Negotiation', value: 'negotiation'},
      // {label: 'Renewal', value: 'renewal'},
      // {label: 'Proposal', value: 'proposal'}
  ]
  }

  ngOnInit(): void {
    
    // this.searchService.getSampleData().subscribe(res => {
    //   this.data = res;
    //   this.loading = false;
    //   this.app.loading = false;       
    //   //console.log('data,' ,this.data);
    // });
   
    setTimeout(() =>{
      this.searchService.getSampleData().subscribe(res => {
        this.data = res//.filter(item=>item.ENDDTE!=0)
        //this.mktsegs = this.data(item=>item.MAPMS);
        this.loading = false;
        this.app.loading = false;        
        //console.log('data,' ,this.data);
      });
    },3000);     
    // this.loading = true;

    this.config.filterMatchModeOptions = {
      text: [
          FilterMatchMode.STARTS_WITH,
          FilterMatchMode.CONTAINS,
          FilterMatchMode.NOT_CONTAINS,
          FilterMatchMode.ENDS_WITH,
          FilterMatchMode.EQUALS,
          FilterMatchMode.NOT_EQUALS
      ],
      numeric: [
          // FilterMatchMode.EQUALS,
          // FilterMatchMode.NOT_EQUALS,
          // FilterMatchMode.LESS_THAN,
          // FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
          // FilterMatchMode.GREATER_THAN,
          // FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
      ],
      date: [
          // FilterMatchMode.DATE_IS,
          // FilterMatchMode.DATE_IS_NOT,
          // FilterMatchMode.DATE_BEFORE,
          // FilterMatchMode.DATE_AFTER
      ]
    }
  }

  lazyLoadClasses(event: LazyLoadEvent) {
    this.loading = true;    
    //  if (this.data) {
    //   this.data = this.data.slice(event.first, (event.first + event.rows));
    //   this.loading = false;
    //   this.cd.detectChanges();
    // }  
    // else{
    //   this.searchService.getData().subscribe(res => {
    //     this.data = res;
    //     this.loading = false;
    //     this.cd.detectChanges(); 
    //     //this.app.loading = false;       
    //     //console.log('data,' ,this.data);
    //   });
    // }     
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
    // this.messageService.add({key: 'key1', severity:'info', sticky:true, summary:'Class Selected', detail: data.CLASX.toString() + ' - ' + data.DESC});
    // this.messageService.add({key: 'key2', severity:'info', sticky:true, summary:'app.component', detail: 'app.component'});
   
  }
  AZclicked(letter: string, table:Table){
    this.loading = true;
    //this.data = this.data.filter(x=>x.DESC.charAt(0) === letter);
    table.filterGlobal(letter, FilterMatchMode.STARTS_WITH);

    //* this was the old way before the code above */
    // this.loading = true;
    // //this.app.loading = true;
    // this.searchService.getData().subscribe(res => {
    //   this.data = res.filter(item=>item.DESC.charAt(0) == letter)
    //   this.loading = false;
    //   this.cd.detectChanges(); 
    //   //this.app.loading = false;
    // });
  }
  clear(table: Table) {
    table.clear();
    this.messageService.clear();
    //var tb = this.document.getElementById('tbsearch');   
    //this.tbsearch.nativeElement.value = '';
    // if(this.tb1Value === ''){
    //  this.app.loading = true;
    //  this.ngOnInit();   
    // }
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
  AddMenuItems():void{
    
    //General Rules
    // this.menuClass.addMenuItem({
    //   name: 'GeneralRules',
    //   label: 'General Rules',
    //   color: "ui-steps-number-default",
    //   navSkip: false,
    //   active: false,
    //   hasError: false,
    //   errors: [],
    //   buttons: [],
    //   form: '',
    //   icon: 'fa fa-clipboard-list',
    //   block: [],
    //   visible: true,
    //   quote: ""
    // });

    // //Agent Authority Document
    // this.menuClass.addMenuItem({
    //   name: 'AgentAuthorityDocument',
    //   label: 'Agent Authority Document',
    //   color: "ui-steps-number-default",
    //   navSkip: false,
    //   active: false,
    //   hasError: false,
    //   errors: [],
    //   buttons: [],
    //   form: '',
    //   icon: 'fa fa-file',
    //   block: [],
    //   visible: true,
    //   quote: ""
    // });

    // //Agent Binding Authority link
    // this.menuClass.addMenuItem({
    //   name: 'AgentBindingAuthoritylink',
    //   label: 'Agent Binding Authority link',
    //   color: "ui-steps-number-default",
    //   navSkip: false,
    //   active: false,
    //   hasError: false,
    //   errors: [],
    //   buttons: [],
    //   form: '',
    //   icon: 'fa fa-object-group',
    //   block: [],
    //   visible: true,
    //   quote: ""
    // });
  }
}
interface DesirabilityOptions {
  name: string,
  value: string
}