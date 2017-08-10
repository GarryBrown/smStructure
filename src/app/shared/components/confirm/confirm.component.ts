import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {

  @Output() onDelete = new EventEmitter();

  constructor(public dialogRef: MdDialogRef<Component>) { }

  ngOnInit() {
  }

  close(answer) {
    this.dialogRef.close(answer);
  }

}
