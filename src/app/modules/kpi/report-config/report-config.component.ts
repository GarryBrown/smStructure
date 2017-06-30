import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { ReportConfigService } from './report-config.service';

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
  isChanged: boolean;

  details = false;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<ReportConfigComponent>,
    private reportService: ReportConfigService,
  ) {
    this.isChanged = false;
    this.reports = data[0];
    this.routes = data[1];
  }

  ngOnInit() {

  }

  toggleInfo() {
    this.details = !this.details;
  }

  create() {
    this.newReport = new Report();
  }

  onDelete(report) {
    this.reportService.delete(report.id).subscribe(response => this.onDeleteSuccess(report.id, response), (err) => this.onSaveError(err));

  }

  onSave(report) {
    console.log(report);
    if (report && report.id === undefined) {
      this.reportService.create(report).subscribe(report => this.onSaveSuccess(report, true), (err) => this.onSaveError(err));
    } else if (report) {
      this.reportService.update(report).subscribe(report => this.onSaveSuccess(report, false), (err) => this.onSaveError(err));
    }
  }

  onSaveSuccess(report, isNew) {
    this.isChanged = true;
    if (isNew) {
      this.newReport = null;
      this.reports.unshift(report);
    }
  }

  onDeleteSuccess(id, response) {
    this.isChanged = true;
    this.reports = this.reports.filter(report => report.id !== id);
  }

  onSaveError(err) {
    console.error(err);
  }

  close() {
    if (this.isChanged) {
      this.dialogRef.close(this.reports);
    } else {
      this.dialogRef.close(false);
    }
    
  }

}
