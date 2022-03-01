import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//primeng
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {DividerModule} from 'primeng/divider';
import {CalendarModule} from 'primeng/calendar';
import {SidebarModule} from 'primeng/sidebar';
import {OverlayPanelModule} from 'primeng/overlaypanel';

//components
import {AppComponent} from './app.component';
import {SearchresultsComponent} from './search/searchresults.component';
//services
import {MessageService} from 'primeng/api';
import {SearchserviceService} from './services/searchservice.service'

@NgModule({
  declarations: [
    AppComponent,
    SearchresultsComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ToastModule,
    PanelModule,
    ButtonModule,
    DividerModule,
    SidebarModule,
    OverlayPanelModule,
    BrowserAnimationsModule
  ],
  providers: [SearchserviceService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
