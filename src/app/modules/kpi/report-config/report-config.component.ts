import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-report-config',
  templateUrl: './report-config.component.html',
  styleUrls: ['./report-config.component.scss']
})
export class ReportConfigComponent implements OnInit {
  presetReports: Array<any>;
  allFields: Array<any>;
  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<ReportConfigComponent>
  ) { 
    this.presetReports = data[0];
    this.allFields = data[1];
  }

  ngOnInit() {
    // console.log('report config');
    // console.log(this.data[0][0].fields[0]);
    // console.log(this.data[1]);
    // console.log(this.data[1].includes(this.data[0][0].fields[0]));
  }

  close() {
    this.dialogRef.close('Cancel');
  }

}
