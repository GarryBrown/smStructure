import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

import { Route, Report } from '../../../models';

@Component({
  selector: 'app-report-config',
  templateUrl: './report-config.component.html',
  styleUrls: ['./report-config.component.scss']
})
export class ReportConfigComponent implements OnInit {

  routes: Array<Route>;
  reports: Array<Report>;
  newReport: Report;

   details = false;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<ReportConfigComponent>
  ) {
    this.reports = data[0];
    this.routes = data[1];
  }

  ngOnInit() {

  }

  close() {
    this.dialogRef.close('Cancel');
  }
  toggleInfo() {
    this.details = !this.details;
  }

  create() {
    this.newReport = new Report();
  }

  onSave(report) {
    if (report) {
      this.newReport = null;
      this.reports.push(report);
    }
  }

}
