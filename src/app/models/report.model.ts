import { Route } from './route.model';

export class Report {
    constructor(
        public id?: number,
        public description?: string,
        public routes?: Array<Route>,
        public indicatorsSet?: Array<any>,
    ) {
        this.description = description ? description : 'Новый отчет';
    }
}