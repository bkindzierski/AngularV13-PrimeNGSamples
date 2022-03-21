import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-progressmodal',
  templateUrl: './progressmodal.component.html',
  styleUrls: ['./progressmodal.component.css']
})
export class ProgressmodalComponent implements OnInit,OnDestroy  {

  loading = true;
  msg:any;
  constructor(private cd: ChangeDetectorRef) { 

    this.msg = { severity: 'info', summary: "Loading Information", detail: "start" };
  }
 

  ngOnInit(): void {

  }

  ngOnDestroy() {
		//console.log("notify desroyed");	
		this.cd.detach();
	}
}
