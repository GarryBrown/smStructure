import { Injectable, ViewContainerRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { StepsService } from './steps.service';
import { Task } from '../../../models';

@Injectable()
export class ResultPopupService {

  constructor(
    private dialog: MdDialog,
    private router: Router,
    private stepsService: StepsService,
  ) { }

  public open(component: any, id?: string) {
    if (id) {
      this.stepsService.find(id)
        .subscribe(teaching => {
          this.bindDialog(component, teaching);
        });
    }

  }

  bindDialog(component: TemplateRef<any>, teaching: any) {
    let dialogRef: MdDialogRef<any>;
    let config = new MdDialogConfig();
    config.height = '80%';
    config.width = '50%';
    dialogRef = this.dialog.open(component, config);
    dialogRef.componentInstance.getTeaching(teaching);

    dialogRef.afterClosed().subscribe(data => {
      this.router.navigate([{ outlets: { popup: null } }], { replaceUrl: true });
    });

    return dialogRef;
  }


}
