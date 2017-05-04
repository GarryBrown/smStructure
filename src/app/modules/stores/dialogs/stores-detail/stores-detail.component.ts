import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-stores-detail',
  templateUrl: './stores-detail.component.html',
  styleUrls: ['./stores-detail.component.scss']
})
export class StoresDetailComponent implements OnInit {

  public store: any;

  constructor(public dialogRef: MdDialogRef<StoresDetailComponent>) { }

  ngOnInit() {
  }

}
