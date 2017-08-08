import { Component, OnInit, OnDestroy } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';


import { TaskEditComponent, TaskDetailsComponent } from "../";

import { TasksPopupService } from '../../services';



@Component({
  selector: 'tasks-popup',
  template: '',
  providers: [TasksPopupService]
})
export class TasksPopupComponent implements OnInit, OnDestroy {

  modalRef: any;
  routeSub: any;

  constructor(
    public tasksPopup: TasksPopupService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {

      if (this.router.url.indexOf('details') !== -1) {
        this.modalRef = this.tasksPopup.open(TaskDetailsComponent, params['id']);
      } else {
        if (params['id']) {
          this.modalRef = this.tasksPopup.open(TaskEditComponent, params['id']);
        } else {
          this.modalRef = this.tasksPopup.open(TaskEditComponent);
        }
      }

    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
