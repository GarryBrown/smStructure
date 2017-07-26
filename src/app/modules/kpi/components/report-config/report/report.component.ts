import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MdDialog } from '@angular/material';

import { PlanDetailService } from '../../../services/plan-detail.service';
import { ReportConfigService } from '../../../services/report-config.service';
import { Route, Report, Indicator, Field } from '../../../../../models';
import { CheckboxComponent } from '../../checkbox/checkbox.component';
import { AlertBarComponent } from '../../../../../shared';
import { ConfirmComponent } from '../../../../../shared';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
    providers: [AlertBarComponent]
})
export class ReportComponent implements OnInit, OnChanges {
    @Input() report: Report;
    @Input() routes: Array<any>;
    @Output() onSave: EventEmitter<Report> = new EventEmitter<Report>();
    @Output() onDelete: EventEmitter<Report> = new EventEmitter<Report>();

    indicators: Array<Indicator>;
    allFields: Array<Field>;
    details = false;
    getSelected: any;

    constructor(
        private pdService: PlanDetailService,
        private reportService: ReportConfigService,
        private alertService: AlertBarComponent,
        public dialog: MdDialog
    ) {

        this.getSelected = pdService.getSelected;
    }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this.report && this.report.routes.length) {
            this.pdService.getIndicatorsByRoutes(this.report.routes).subscribe(
                (data: any) => {
                    this.report.indicators = this.copyObj(this.report.indicators);
                    this.indicators = data.data;

                    this.allFields = this.indicators[0].planFields;
                },
                err => console.log('error')
            )
        }
    }

    copyObj(indicators) {
        return indicators.map(indicator => Object.assign({}, indicator));
    }
    toggleInfo() {
        this.details = !this.details;
    }

    save() {
        this.onSave.emit(this.report);
        this.toggleInfo();
        this.alertService.open(this.report.description + " успешно изменен!");
    }

    changeRoutes(routes) {
        this.pdService.getIndicatorsByRoutes(routes).subscribe(
            data => {
                this.indicators = data.data;
                this.allFields = this.indicators[0].planFields;
            },
            err => this.onError('getIndicatorsByRoutes', err)
        )
    }

    delete(report) {
        let dialogRef = this.dialog.open(ConfirmComponent, {
            width: '20%',
            height: '20%',
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.onDelete.emit(report);
                this.alertService.open(this.report.description + " удален!");
            } else {
              dialogRef.close();
            }
        });
    }

    onError(api: string, err: any) {
        console.error(`error in ${api} => ${err}`);
    }

    onCheckRoutes(routes) {
        this.report.routes = routes;
    }
    onCheckIndicators(indicators) {
        this.report.indicators = indicators;
    }
}

