import { Injectable } from '@angular/core';
import { Observable, Subject  } from 'rxjs/Rx';

@Injectable()
export class SidebarToggleService {

  constructor(){ }

  private userAuthSource = new Subject<boolean>();
  userAuth$ = this.userAuthSource.asObservable();

  auth(user: any) {
    this.userAuthSource.next(user);
  }

  private sidebarToggleSource = new Subject<boolean>();
  missionConfirmed$ = this.sidebarToggleSource.asObservable();

  sidebarToggle(show: boolean) {
    this.sidebarToggleSource.next(show);
  }
  
  //opotynity observable

  // private sidebarToggleSource = new Subject<boolean>();
  // missionConfirmed$ = this.sidebarToggleSource.asObservable();

  // sidebarToggle(show: boolean) {
  //   this.sidebarToggleSource.next(show);
  // }




}
