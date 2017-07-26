import { NgModule, Provider } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { SidebarService } from './sidebar/sidebar.service';
import { GetHelpComponent } from './get-help/get-help.component';


@NgModule({
    declarations: [SidebarComponent, FooterComponent, HeaderComponent, GetHelpComponent],
    imports     : [BrowserModule, RouterModule,  SharedModule, HttpModule ],
    exports     : [SidebarComponent, FooterComponent, HeaderComponent],
    entryComponents: [GetHelpComponent],
    providers: [
        SidebarService,
    ]
})

export class LayoutrModule {}
