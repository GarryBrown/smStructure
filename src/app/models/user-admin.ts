export class Customer {
  constructor(
    public id?: string,
    activated?: boolean,
    authorities?: string[],
    createdBy?: string,
    createdDate?: string,
    email?: string,
    firstName?: string,
    imageUrl?: string,
    langKey?: string,
    lastModifiedBy?: string,
    lastModifiedDate?: string,
    lastName?: string,
    login?: string
  ) { }
}