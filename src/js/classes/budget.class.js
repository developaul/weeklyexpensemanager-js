export class Budget {

    constructor( budget ) {
        this.budget     = budget;
        this.remaining  = this.budget;
        this.expenses   = [];
    }
 
    newExpense( expense ) {
        this.expenses = [ ...this.expenses, expense ];
    }
}