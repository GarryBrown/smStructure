import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AppInMemModule } from './app.inMem.module';
import { AppRoutingModule } from './app-routing.module';
// import { InterceptorService } from './block/interceptor.service';

import {Ng2Webstorage} from 'ng2-webstorage';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { FormsModule } from '@angular/forms';
/* Basic */
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutrModule } from './components//layout.module';

/* Modules */
import { KPIModule } from './modules/kpi/kpi.module';
import { AdminModule } from './modules/admin/admin.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { StoresModule } from './modules/stores/stores.module';
import { ProfileModule } from './modules/profile/profile.module';
import { LandingModule } from './modules/landing/landing.module';
import { AccountModule } from './modules/account/account.module';

import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { httpFactory } from './blocks/interceptor/http.provider';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 10} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppInMemModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    Ng2Webstorage,
    RouterModule,
    /*layouts */
    LayoutrModule,
    /* modules */
    AccountModule,
    LandingModule,
    KPIModule,
    AdminModule,
    DashboardModule,
    StoresModule,
    ProfileModule,
  ],
  providers: [

    /* Библиотеку httpFactory нужно объединить с customHttpProvider, так как вторая перекрывает первую */
        customHttpProvider(),
       {provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
     // provide(Http, { useClass: InterceptorService })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
