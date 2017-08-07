import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/* directives */
import { SortByDirective } from './directive/sort-by.directive';
import { SortDirective } from './directive/sort.directive';
import { HasAuthorityDirective } from './directive/has-authority.directive';
/* service */
import { PaginUtilService } from './services/pagin-util.service';
import { DaDataService } from './services/da-data.service';
import { DeleteUtilsService } from './services/delete-utils.service';
import { StoresService } from './services/stores.service';
import { UtilsService } from './services/utils.service';
/* pipes  */
import { PrettyCountPipe } from './pipes/pretty-count.pipe';
/* interceptors */
import { HttpInterceptor } from './interceptor/http.interceptor';
import { InterceptableHttp } from './interceptor/interceptable-http';
/* components */
import { AlertBarComponent } from './components/alert-bar/alert-bar.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SortByDirective,
    SortDirective,
    HasAuthorityDirective,
    PrettyCountPipe,
    AlertBarComponent,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PrettyCountPipe,
    NgxChartsModule,
    SortByDirective,
    SortDirective,
    HasAuthorityDirective,
    AlertBarComponent,
    BrowserAnimationsModule
  ],
  providers: [
    PaginUtilService,
    DaDataService,
    DeleteUtilsService,
    StoresService,
    UtilsService,
  ]
})
export class SharedModule { }
