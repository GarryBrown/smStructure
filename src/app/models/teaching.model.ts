export class Teaching {
    constructor(
        public id?: number,
        public typeOfTeaching?: any,
        public teachingSpecialities?: Array<TeachingSpecialities>,
    ) {}
}


export class TeachingSpecialities {
    constructor(
        public id?: number,
        public deliveryPoint?: any,
        public TypeOfStep?: any,
        public TypeOfStepQuestion?: any,
        public TypeOfStepAnswer?: any,
    ) {}
}


