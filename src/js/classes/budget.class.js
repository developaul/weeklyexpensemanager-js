export class Budget {

    constructor( budget ) {
        this.budget     = budget;
        this.remaining  = this.budget;
        this.expenses   = [];
    }
 
    newExpense( expense ) {
        this.expenses = [ ...this.expenses, expense ];
        this.calculateRemaining();
    }

    calculateRemaining() {
        const expensed = this.expenses.reduce( ( total, expense ) => total + expense.quantity ,0 );
        this.remaining = this.budget - expensed;
    }
}