import { Component, OnInit } from '@angular/core';
import { ALL, SCH, EDU } from '../education.constants';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { UtilsService } from '../../../shared';
import { Event, TypeOfEvent } from '../../../models';

@Component({
  selector: 'app-edu-config',
  templateUrl: './edu-config.component.html',
  styleUrls: ['./edu-config.component.scss']
})
export class EduConfigComponent implements OnInit {
  private all;
  private sch;
  private edu;
  public event: Event;
  public access;
  getSelected: any;
  types: Array<TypeOfEvent> = [
    { id: 2, description: 'store-check' },
    { id: 1, description: 'Обучение' }
  ];

  constructor(
    private utilsService: UtilsService,
    public dialogRef: MdDialogRef<EduConfigComponent>,
    private router: Router
  ) { 
    this.getSelected = utilsService.getSelectedSingle;
    this.all = ALL;
    this.sch = SCH;
    this.edu = EDU;
  }

  ngOnInit() {
    console.log(this.access);
    console.log(this.event);
  }

  startEvent() {
    console.log(this.event);
    this.router.navigate(['edu/theme', 1]).then(
      (result) => this.dialogRef.close(false),
      (reason) => console.error('navigate error')
    );
  }

  close() {
      this.dialogRef.close(false);
  }

}
