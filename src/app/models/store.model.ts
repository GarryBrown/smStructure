export class Store {
    constructor(
        public id?: string,
        public inn?: number,
        public phoneNumber?: string,
        public description?: string,
        public shortDescription?: string,
        public email?: string,
        public acceptanceStartTime?: string,
        public acceptanceEndTime?: string,
        public customer?: any,
    ) {}
}

