import { loadApp, addTask, addTasks, setDueDate } from './customFunctions.cy';
import * as dayjs from 'dayjs';

const tasks = [
    ['Do laundry', 'Buy Ticket for World cup Football'],
    ['Do grocery shopping', 'Wish birthday'],
    ['Order birthday gift', 'Buy playstation']
];
const unscheduledTask = 'Go to Gym';

describe('Task Calender page', () => {
    beforeEach(loadApp);
    beforeEach(() => {
        for (let i = 0; i < tasks.length; i++) {
            const date = dayjs().add(i, "day").format('MM/DD/YYYY');
            addTasks(tasks[i]);
            tasks[i].forEach((task) => setDueDate(task, date));
        }
        addTask(unscheduledTask); // for testing not scheduled
        cy.visit('/calenderView');
    });

    const today = dayjs().format('DD-MM-YYYY');
    const tomorrow = dayjs().add(1, "day").format('DD-MM-YYYY');
    const dayAfterTomorrow = dayjs().add(2, "day").format('DD-MM-YYYY');

    it('Displays the dates in accending order', () => {
        cy.get('.dateGroup').should('have.length', 4);
        cy.get(`.dateGroup`).eq(0)
            .find('h5').should('contain', "Unscheduled");
        cy.get(`.dateGroup`).eq(1)
            .find('h5').should('contain', today);
        cy.get(`.dateGroup`).eq(2)
            .find('h5').should('contain', tomorrow);
        cy.get(`.dateGroup`).eq(3)
            .find('h5').should('contain', dayAfterTomorrow);
    });

    it('Displays the task according to duedate', () => {
        cy.get(`.date-${today}`).children().eq(1)
            .find('.todo-item-caption > input')
            .should('have.value', `${tasks[0][1]}`);
        cy.get(`.date-${today}`).children().eq(2)
            .find('.todo-item-caption > input')
            .should('have.value', `${tasks[0][0]}`);
        cy.get(`.date-${tomorrow}`).children().eq(1)
            .find('.todo-item-caption > input')
            .should('have.value', `${tasks[1][1]}`);
        cy.get(`.date-${tomorrow}`).children().eq(2)
            .find('.todo-item-caption > input')
            .should('have.value', `${tasks[1][0]}`);
        cy.get(`.date-${dayAfterTomorrow}`).children().eq(1)
            .find('.todo-item-caption > input')
            .should('have.value', `${tasks[2][1]}`);
        cy.get(`.date-${dayAfterTomorrow}`).children().eq(2)
            .find('.todo-item-caption > input')
            .should('have.value', `${tasks[2][0]}`);
    });

    it('Displays "Unscheduled"', () => {
        cy.get(`.dateGroup`).eq(0).find('h5')
            .should('contain', "Unscheduled");
        cy.get(`.date-Invalid`).children().eq(1)
            .find('.todo-item-caption > input')
            .should('have.value', `${unscheduledTask}`);
    });
})