import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { PrincipalService } from '../../core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './media.header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() opened;
  @Output() toggleNav: EventEmitter<boolean> = new EventEmitter<boolean>();
  show: boolean;
  user: any;

  constructor(
    private principal: PrincipalService,
    public dialog: MdDialog
  ) {
    
  }

  ngOnInit() {
    this.principal.getUserState().subscribe(user => this.user = user);
  }

  ngOnChanges() {
    this.show = this.opened;
  }

  toggle() {
    this.show = !this.show;
    this.toggleNav.emit(this.show);
  }

}
