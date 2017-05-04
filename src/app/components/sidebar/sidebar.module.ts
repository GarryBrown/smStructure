import { NgModule, Provider } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';

import { SidebarComponent } from './sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

import { SidebarService } from './sidebar.service';


@NgModule({
    declarations: [SidebarComponent, FooterComponent, HeaderComponent],
    imports     : [BrowserModule, RouterModule,  SharedModule ],
    exports     : [SidebarComponent, FooterComponent, HeaderComponent],
    providers: [
        SidebarService,
    ]
})

export class SidebarModule {}
