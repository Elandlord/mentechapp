export class Invoice {
    id: number;
    title: string;
    content: string;
    costs: number;

    constructor(id: number, costs: number) {
        this.id = id;
        this.costs = costs;
    }
}
