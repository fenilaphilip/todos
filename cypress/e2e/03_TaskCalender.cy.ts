import { loadApp, setDueDate } from './customFunctions.cy';

const tasks = ['Do laundry', 'Buy Ticket for World cup Football', 'Do grocery shopping', 'Wish birthday', 'Order birthday gift', 'Buy playstation']

describe('Task Calender page', () => {
    beforeEach(loadApp);
    beforeEach(() => {
        for (let i = 0; i < tasks.length; i++) {
            let count = i;
            if (tasks[i].charAt(0) === "D") {
                count = i + 1;
            }
            setDueDate(tasks[i], count);
        }
        cy.visit('/calenderView');
    });

    it('Displays the dates in accending order', () => {
        cy.get('.dateHeader');
    });
})