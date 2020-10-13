import { total, restante } from '../componentes.js';

export class UI {

    insertBudget( quantity ) {
        const { budget, remaining } = quantity;
        restante.textContent  = remaining;
        total.textContent     = budget;
    }
    
}