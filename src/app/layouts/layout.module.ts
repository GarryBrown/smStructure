import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { SidebarService } from './sidebar/sidebar.service';


@NgModule({
    declarations: [SidebarComponent, FooterComponent, HeaderComponent],
    imports: [BrowserModule, RouterModule, SharedModule, HttpModule],
    exports: [SidebarComponent, FooterComponent, HeaderComponent],
    providers: [
        SidebarService,
    ]
})

export class LayoutrModule { }
