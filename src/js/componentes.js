import { Budget, UI } from './classes/index.js';
import '../css/bootstrap.min.css';

// References
export const total     = document.querySelector( '#total' ), 
             restante  = document.querySelector( '#restante' );



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


// Events
export const startEventListeners = () => {
    document.addEventListener( 'DOMContentLoaded', askBudget );
}