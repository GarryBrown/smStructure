import { Route } from './route.model';

const DATASOURSE = {
    code: "SM",
    description: "Планшет менеджера",
    id: 2,
    isActive: true
}
export class Task {
    constructor(
        public id?: number,
        public code?: string,
        public startDate?: Date,
        public endDate?: Date,
        public description?: string,
        public isComplete?: boolean,
        public route?: Route,
        public deliveryPoint?: any,
        public typeOfActivity?: any,
        public dataSource?: any,
        public activityResults?: Array<any>,
    ) {
        this.id = id ? id : null;
        this.code = code ? code : null;
        this.startDate = startDate ? startDate : new Date();
        this.endDate = endDate ? endDate : new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        this.description = description ? description : 'Новая задача';
        this.isComplete = isComplete ? isComplete : false;
        this.route = route ? route : new Route(null, null);
        this.deliveryPoint = deliveryPoint ? deliveryPoint : {};
        this.typeOfActivity = typeOfActivity ? typeOfActivity : {};
        this.dataSource = dataSource ? dataSource : DATASOURSE;
        this.activityResults = activityResults ? activityResults : [];
    }
}
