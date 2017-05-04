import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* shared */
import { SharedModule } from '../../shared/shared.module';
/* test-api */
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService }     from '../../in-mem-data-service';
/* route */
import { LandingRoutingModule } from './landing-routing.module';
/* components */
import { LandingComponent } from './landing.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
/* services */
import { SigninService } from './signin/signin.service';
import { SignupService } from './signup/signup.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,


    // InMemoryWebApiModule.forRoot(InMemDataService, { delay: 500 }),
  ],
  declarations: [LandingComponent, LandingPageComponent, SignupComponent, SigninComponent],
  providers: [SigninService, SignupService,]
})
export class LandingModule { }
