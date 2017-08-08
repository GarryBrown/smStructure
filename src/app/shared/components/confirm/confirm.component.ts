import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class ConfirmComponent implements OnInit {

  state: string = 'inactive';

  @Output() onDelete = new EventEmitter();
  constructor(public dialogRef: MdDialogRef<Component>) { }

  ngOnInit() {
  }

  close(answer) {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    // this.dialogRef.close(answer);
  }

}
