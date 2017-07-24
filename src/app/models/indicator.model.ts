import { Field } from './field.model';

export class Indicator {
    constructor(
        public id?: number,
        public description?: string,
        public planFields?: Array<Field>,
    ) {}
}