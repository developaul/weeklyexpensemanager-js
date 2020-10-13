import { Budget, UI } from './classes/index.js';
import '../css/bootstrap.min.css';

// References
export const total          = document.querySelector( '#total' ),
             expensesList   = document.querySelector( '#gastos ul' ),
             restante       = document.querySelector( '#restante' ),
             form           = document.querySelector( '#agregar-gasto' );



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

// Actualiza los gastos
export const updateExpenses = ( id = null ) => {
    if( id ) { budget.deleteExpense( id ); }

    // Mostramos los gastos en el HTML
    const { expenses, remaining } = budget;
    ui.showExpenses( expenses );

    // Actualiza el remaining
    ui.updateRemaining( remaining );
    
    // Comprueba el presupuesto
    ui.checkBuget( budget );
}

// Añade un nuevo Gasto
const addExpense = ( name, quantity ) => {
    const expense = { name, quantity, id: Date.now() }
    
    // Agregamos el nuevo gasto y mostramos un mensaje de éxito
    budget.newExpense( expense );
    ui.showAlert( 'Gasto agregado correctamente' );

    // Actualiza los gastos
    updateExpenses();

    // Resetea el formulario
    form.reset();
}

// Valida el gasto enviado
const validateExpense = event => {
    event.preventDefault();
    
    // Leyendo datos del formulario
    const name      = document.querySelector( '#gasto' ).value,
          quantity  = Number( document.querySelector( '#cantidad' ).value ),
          remaining = Number( restante.textContent ); 

    // Valiando posibles valores
    if( name === '' || quantity === '' ) {
        ui.showAlert( 'Ambos campos son obligatorios', 'error' );
        return;
    } else if( quantity <= 0 || isNaN( quantity ) ) {
        ui.showAlert( 'Cantidad no válida', 'error' ); 
        return;
    } else if( quantity > remaining ) {
        ui.showAlert( 'La cantidad supera su dinero restante' ,'error' );
        return;
    }

    // Una vez validado, agregamos el nuevo gasto
    addExpense( name, quantity );
}

// Events
export const startEventListeners = () => {
    document.addEventListener( 'DOMContentLoaded', askBudget );
    form.addEventListener( 'submit', validateExpense );
}