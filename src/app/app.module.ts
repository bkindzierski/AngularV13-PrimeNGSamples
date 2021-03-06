import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
//primeng test new branch
import {PrimeIcons} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {DividerModule} from 'primeng/divider';
import {CalendarModule} from 'primeng/calendar';
import {SidebarModule} from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

//components
import {AppComponent} from './app.component';
import {SearchresultsComponent} from './search/searchresults.component';
//services
import {MessageService} from 'primeng/api';
import {SearchserviceService} from './services/searchservice.service';
import {TestingComponent} from './components/testing/testing.component';
import {ProgressmodalComponent} from './components/progressmodal/progressmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchresultsComponent,
    TestingComponent,
    ProgressmodalComponent
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
    FieldsetModule,
    InputTextModule,
    OverlayPanelModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextareaModule,
    ProgressSpinnerModule
  ],
  providers: [SearchserviceService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
