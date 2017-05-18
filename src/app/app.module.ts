import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { InterceptorService } from './block/interceptor.service';

import {Ng2Webstorage} from 'ng2-webstorage';
import { customHttpProvider } from './blocks/interceptor/http.provider';

/* Basic */
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SidebarModule } from './components/sidebar/sidebar.module';



/* Modules */
import { KPIModule } from './modules/kpi/kpi.module';
import { AdminModule } from './modules/admin/admin.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { StoresModule } from './modules/stores/stores.module';
import { ProfileModule } from './modules/profile/profile.module';
import { LandingModule } from './modules/landing/landing.module';
import { AccountModule } from './modules/account/account.module';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    Ng2Webstorage,
    RouterModule,
    /*layouts */
    SidebarModule,
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
      customHttpProvider(),
       {provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
     // provide(Http, { useClass: InterceptorService })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
