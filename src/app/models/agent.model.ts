import { Plan } from "app/models/plan.model";

export class Agent {
    constructor(
        public id?: number,
        public name?: string,
        public plans?: Array<Plan>,
    ) {}
}