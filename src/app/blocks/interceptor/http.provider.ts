import { Injector } from '@angular/core';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { InterceptableHttp } from '../../shared/interceptor/interceptable-http';

import { AuthInterceptor } from './auth.interceptor';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';


export function interceptableFactory(
    backend: XHRBackend,
    defaultOptions: RequestOptions,
    localStorage: LocalStorageService,
    sessionStorage: SessionStorageService,
    injector: Injector,
) {
    return new InterceptableHttp(
        backend,
        defaultOptions,
        [
            new AuthInterceptor(localStorage, sessionStorage),
            // Other interceptors can be added here
        ]
    );
};

export function customHttpProvider() {
    return {
        provide: Http,
        useFactory: interceptableFactory,
        deps: [
            XHRBackend,
            RequestOptions,
            LocalStorageService,
            SessionStorageService,
            Injector,        ]
    };
};
