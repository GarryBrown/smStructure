export class Event {
    public id?: number;
    public type?: string;
    public route?: any;
    public staff?: any;
    public dp?: any;
    public date?: any;
    constructor(
        id?: number,
        type?: string,
        route?: any,
        staff?: any,
        dp?: any,
        date?: any,
    ) { 
        this.id = id ? id : null;
        this.type = type ? type : '';
        this.route = route ? route : {};
        this.staff = staff ? staff : {};
        this.dp = dp ? dp : {};
        this.date = date ? date : new Date();
    }
}



