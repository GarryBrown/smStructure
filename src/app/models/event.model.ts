export class Event {
    public id?: number;
    public type?: TypeOfEvent;
    public route?: any;
    public staff?: any;
    public dp?: any;
    public dateOfStart?: any;
    constructor(
        id?: number,
        type?: TypeOfEvent,
        route?: any,
        staff?: any,
        dp?: any,
        dateOfStart?: any,
    ) { 
        this.id = id ? id : null;
        this.type = type ? type : {};
        this.route = route ? route : {};
        this.staff = staff ? staff : {};
        this.dp = dp ? dp : {};
        this.dateOfStart = dateOfStart ? dateOfStart : new Date();
    }
}

export class TypeOfEvent {
    constructor(
        public id?: number,
        public description?: string,
    ) { }
}


