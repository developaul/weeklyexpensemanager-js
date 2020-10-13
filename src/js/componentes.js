import { Budget, UI } from './classes/index.js';
import '../css/bootstrap.min.css';

// References
export const total      = document.querySelector( '#total' ), 
             restante   = document.querySelector( '#restante' ),
             form       = document.querySelector( '#agregar-gasto' );



// Variables
let budget;
const ui = new UI();



// Functions
// Pregunta por el presupuesto
const askBudget = () => {
    const userBudget = Number( prompt( '¿Cúal es su presupuesto?' ) );

    if( isNaN( userBudget ) || userBudget <= 0 ) {
        window.location.reload(); // Recarga la ventana actual
        return;
    }

    budget = new Budget( userBudget );
    ui.insertBudget( budget );
}

// Valida el gasto enviado
const validateExpense = event => {
    event.preventDefault();
    
    // Leyendo datos del formulario
    const name      = document.querySelector( '#gasto' ).value,
          quantity  = Number( document.querySelector( '#cantidad' ).value ); 

    // Valiando posibles valores
    if( name === '' || quantity === '' ) {
        ui.showAlert( 'Ambos campos son obligatorios', 'error' );
        return;
    } else if( quantity <= 0 || isNaN( quantity ) ) {
        ui.showAlert( 'Cantidad no válida', 'error' ); 
        return;
    }          
}

// Events
export const startEventListeners = () => {
    document.addEventListener( 'DOMContentLoaded', askBudget );
    form.addEventListener( 'submit', validateExpense );
}