import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* shared */
import { SharedModule } from '../../shared';
/* route */
import { LandingRoutingModule } from './landing-routing.module';
/* components */
import { LandingComponent } from './landing.component';
import { SigninComponent } from './components/signin/signin.component';
/* services */
import { SigninService } from './services/signin.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
  ],
  declarations: [LandingComponent, SigninComponent],
  providers: [SigninService,]
})
export class LandingModule { }
