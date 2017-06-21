import { Route } from './route.model';

export class Report {
    constructor(
        public id?: number,
        public description?: string,
        public routes?: Array<Route>,
        public indicators?: Array<any>,
    ) {
        this.description = description ? description : 'Новый отчет';
    }
}