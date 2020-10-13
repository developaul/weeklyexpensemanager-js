import { total, restante, form, expensesList } from '../componentes.js';

export class UI {

    insertBudget( quantity ) {
        const { budget, remaining } = quantity;
        restante.textContent  = remaining;
        total.textContent     = budget;
    }
    
    showAlert( message, type ) {
        const divMessage = document.createElement( 'div' );
        divMessage.textContent = message;

        divMessage.classList.add( 'text-center', 'alert' );
        divMessage.classList.add( ( type === 'error' ) ? 'alert-danger' : 'alert-success' );

        document.querySelector( '.primario' ).insertBefore( divMessage, form );

        setTimeout( () => {
            divMessage.remove();
        }, 3000 );
    }

    showExpenses( expenses ) {
        this.cleanHTML();

        expenses.forEach( expense => {
            const { name, quantity, id } = expense;

            const newExpense = document.createElement( 'li' );
            newExpense.className = 'list-group-item d-flex justify-content-between align-items-center';
            newExpense.dataset.id = id;
            newExpense.innerHTML = `${ name } <span class="badge badge-primary badge-pill"> $ ${ quantity } </span>`;

            const btnDelete = document.createElement( 'button' );
            btnDelete.classList.add( 'btn', 'btn-danger', 'borrar-gasto' );
            btnDelete.innerHTML = 'Borrar &times';
            
            newExpense.appendChild( btnDelete );
            expensesList.appendChild( newExpense );
        });
    }
    
    cleanHTML() {
        while( expensesList.firstChild ) { expensesList.removeChild( expensesList.firstChild ); }
    }

    updateRemaining( remaining ) {
        restante.textContent = remaining;
    }

}