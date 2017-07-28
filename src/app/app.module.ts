import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import { Ng2Webstorage } from 'ng2-webstorage';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { FormsModule } from '@angular/forms';
/* Basic */
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutrModule } from './layouts//layout.module';

/* Modules */
import { KPIModule } from './modules/kpi/kpi.module';
import { EducationModule } from './modules/education/education.module';
// import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ProfileModule } from './modules/profile/profile.module';
import { LandingModule } from './modules/landing/landing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    CoreModule.forRoot(),
    Ng2Webstorage,
    RouterModule,
    /*layouts */
    LayoutrModule,
    /* modules */
    LandingModule,
    KPIModule,
    EducationModule,
    // DashboardModule,
    ProfileModule,
  ],
  providers: [
    customHttpProvider(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
