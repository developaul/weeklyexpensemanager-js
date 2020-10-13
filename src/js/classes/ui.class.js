import { total, restante, form } from '../componentes.js';

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

}