export class Customer {
    public id?: string;
    public inn?: any;
    public description?: any;
    public shortDescription?: any;
    public address?: string;
    public kpp?: string;
    
    constructor(
        id?: string,
        inn?: any,
        description?: any,
        shortDescription?: any,
        address?: string,
        kpp?: string,
    ) {
        this.id = id ? id : null;
        this.inn = inn ? inn : null;
        this.description = description ? description : null;
        this.shortDescription = shortDescription ? shortDescription : null;
        this.address = address ? address : null; 
        this.kpp = kpp ? kpp : null; 
       }
}