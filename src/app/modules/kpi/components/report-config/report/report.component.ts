import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MdDialog } from '@angular/material';

import { PlanDetailService } from '../../../services';
import { ReportConfigService } from '../../../services';
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
        private alert: AlertBarComponent,
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
                    this.indicators = data;
                    this.allFields = this.indicators[0].planFields;
                },
                err => this.alert.open("Не удалось получить данные :(")
            )
        }
        this.details = false;
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
        this.alert.open(this.report.description + " успешно изменен!");
    }

    changeRoutes(routes) {
        this.pdService.getIndicatorsByRoutes(routes).subscribe(
            data => {
                this.indicators = data;
                this.allFields = this.indicators[0].planFields;
            },
            err => this.onError('getIndicatorsByRoutes', err)
        )
    }

    delete(report) {
        let dialogRef = this.dialog.open(ConfirmComponent, {
            width: '45%',
            height: '57%',
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.onDelete.emit(report);
                this.alert.open(this.report.description + " удален!");
            } else {
                dialogRef.close();
            }
        });
    }

    onError(api: string, err: any) {
        this.alert.open("Не удалось получить данные :(")
    }

    onCheckRoutes(routes) {
        this.report.routes = routes;
    }
    onCheckIndicators(indicators) {
        this.report.indicators = indicators;
    }

    disableSave(): boolean {
        if (this.report.description.length === 0 || this.report.routes.length === 0 || this.report.indicators.length === 0) {
            return true;
        }
        return false;
    }
    onTitleClick() {
        this.details = true;
    }
}

