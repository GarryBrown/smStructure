import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ng2-webstorage';

@Injectable()
export class UrlB2bService {

  constructor(
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService,
  ) { }

  getUrl() {
    return this.$localStorage.retrieve('urlB2B');
  }

  setUrl(url) {
    this.$localStorage.store('urlB2B', url);
  }


}
