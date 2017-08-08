import { Route } from './route.model';

export class Task {
    constructor(
        public id?: number,
        public code?: string,
        public startDate?: Date,
        public endDate?: Date,
        public description?: string,
        public route?: Route,
        public deliveryPoint?: any,
        public typeOfActivity?: any,
        public dataSource?: any,
        public activityResults?: Array<any>,
    ) {
        this.id = id ? id : null;
        this.code = code ? code : null;
        this.startDate = startDate ? startDate : new Date();
        this.endDate = endDate ? endDate : new Date();
        this.description = description ? description : 'Новая задача';
        this.route = route ? route : new Route(null, null);
        this.deliveryPoint = deliveryPoint ? deliveryPoint : {};
        this.typeOfActivity = typeOfActivity ? typeOfActivity : {};
        this.typeOfActivity = typeOfActivity ? typeOfActivity : {};
        this.activityResults = activityResults ? activityResults : [];
        
    }
}