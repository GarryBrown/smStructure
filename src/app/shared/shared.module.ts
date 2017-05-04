import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { SortByDirective } from './directive/sort-by.directive';
import { SortDirective } from './directive/sort.directive';
import { HasAuthorityDirective } from './directive/has-authority.directive';
import { PaginUtilService } from './services/pagin-util.service';
import { DaDataService } from './services/da-data.service';
import { PrettyCountPipe } from './pipes/pretty-count.pipe';

import { HttpInterceptor } from './interceptor/http.interceptor';
import { InterceptableHttp } from './interceptor/interceptable-http';

import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { Http } from '@angular/http';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
  ],
  declarations: [
    SortByDirective,
    SortDirective,
    HasAuthorityDirective,
    PrettyCountPipe
    ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule,
    PrettyCountPipe,
    SortByDirective,
    SortDirective,
    HasAuthorityDirective,
    ],
  providers: [
     PaginUtilService,
     DaDataService
    ]
})
export class SharedModule { }
