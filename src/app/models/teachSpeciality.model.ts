

export class teachSpeciality {
    public id?: number;
    public theme?: any;
    public deliveryPoint?: any;
    public step?: any;
    public question?: any;
    public answer?: any;
    public comment?: string;
    public result?: string;

    constructor(
        id?: number,
        theme?: any;
        deliveryPoint?: any;
        step?: any;
        question?: any;
        answer?: any;
        comment?: string;
        result?: any;
    ) {
        this.id = id ? id : null;
        this.theme = theme ? theme : {};
        this.deliveryPoint = deliveryPoint ? deliveryPoint : {};
        this.step = step ? step : {};
        this.question = question ? question : {};
        this.answer = answer ? answer : new Object();
        this.comment = comment ? comment : '';
        this.result = result ? result : '';
    }
}


