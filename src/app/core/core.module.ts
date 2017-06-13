import { NgModule, ModuleWithProviders, ElementRef } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AuthService } from './auth/auth.service';
import { AuthJwtService } from './auth/auth-jwt.service';
import { RouteAccessService } from './auth/route-access.service';

import { AccountService } from './principal/account.service';
import { PrincipalService } from './principal/principal.service';

import { DateUtilService } from './utils/date-util.service';
import { SidebarToggleService } from './utils/sidebar-toggle.service';
import { CSRFService } from './auth/csrf.service';
import { UrlB2bService } from './utils/url-b2b.service';

@NgModule({
  exports: [
    HttpModule
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        AuthJwtService,
        RouteAccessService,
        AccountService,
        PrincipalService,
        DateUtilService,
        CSRFService,
        SidebarToggleService,
        UrlB2bService
      ]
    };
  }
}
