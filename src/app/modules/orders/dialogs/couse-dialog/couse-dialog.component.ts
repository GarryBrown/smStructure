import { Component, Inject, OnInit } from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-couse-dialog',
  templateUrl: './couse-dialog.component.html',
  styleUrls: ['./couse-dialog.component.scss']
})
export class CouseDialogComponent implements OnInit {

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<CouseDialogComponent>) { }

  ngOnInit() {
    console.log(this.data);
  }


  close() {
      this.dialogRef.close('Cancel');
  }

}
