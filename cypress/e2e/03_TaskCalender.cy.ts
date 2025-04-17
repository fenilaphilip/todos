import { find } from 'cypress/types/lodash';
import { loadApp, addTask, addTasks, setDueDate } from './customFunctions.cy';
import * as dayjs from 'dayjs';

const upcomingtasks = [
    ['Do laundry', 'Buy Ticket for World cup Football'],
    ['Do grocery shopping', 'Wish birthday'],
    ['Order birthday gift', 'Buy playstation']
];
const unscheduledTasks = ['Go to Gym', "Learn Driving"];
const overdueTasks = ['Replace water filter', 'Iron shirts'];

const upcomingTasksCount = upcomingtasks.length * 2;
const unscheduledTasksCount = unscheduledTasks.length;
const overdueTasksCount = overdueTasks.length;

const dayBeforeYesterday = dayjs().format('DD-MM-YYYY');
const yesterday = dayjs().format('DD-MM-YYYY');
const today = dayjs().format('DD-MM-YYYY');
const tomorrow = dayjs().add(1, "day").format('DD-MM-YYYY');
const dayAfterTomorrow = dayjs().add(2, "day").format('DD-MM-YYYY');

describe('Task Calender page', () => {
    beforeEach(loadApp);
    beforeEach(() => {
        for (let i = 0; i < upcomingtasks.length; i++) {
            const date = dayjs().add(i, "day").format('MM/DD/YYYY');
            addTasks(upcomingtasks[i]);
            upcomingtasks[i].forEach((task) => setDueDate(task, date));
        }

        unscheduledTasks.forEach((item) => addTask(item));

        for (let i = 0; i < overdueTasks.length; i++) {
            const date = dayjs().subtract(i + 1, "day").format("MM/DD/YYYY");
            addTask(overdueTasks[i]);
            setDueDate(overdueTasks[i], date)
        }

        cy.visit('/calenderView');
    });

    it('Displays the tabs- upcoming, Overdue, Unscheduled and task count of each', () => {
        cy.get('[data-cy="calender-sub-division"]').children()
            .should("contain", "Upcoming")
            .and("contain", "Overdue")
            .and("contain", "Unscheduled");

        cy.get(`[data-cy="Upcoming"]`).contains(upcomingTasksCount);
        cy.get(`[data-cy="Overdue"]`).contains(overdueTasksCount);
        cy.get(`[data-cy="Unscheduled"]`).contains(unscheduledTasksCount);
    });



    it('"Upcoming" tab shows tasks for Today & upcoming dates in accending order', () => {
        cy.get(`[data-cy="Upcoming Todos"]`).children().should('length', 9);
        cy.log('tasks-6 and 3 -date heading  gives 9 children');

        cy.get('[data-cy="Upcoming Todos"]').children().eq(0)
            .contains("Today");

        cy.get('[data-cy="Upcoming Todos"]').children().eq(1)
            .find('.todo-item-caption> input')
            .should($input => {
                const val = $input.val();
                expect([
                    upcomingtasks[0][0],
                    upcomingtasks[0][1]
                ]).to.include(val);
            });
        cy.get('[data-cy="Upcoming Todos"]').children().eq(2)
            .find('.todo-item-caption> input')
            .should($input => {
                const val = $input.val();
                expect([
                    upcomingtasks[0][0],
                    upcomingtasks[0][1]
                ]).to.include(val);
            });

        cy.get('[data-cy="Upcoming Todos"]').children().eq(3)
            .contains(tomorrow);

        cy.get('[data-cy="Upcoming Todos"]').children().eq(4)
            .find('.todo-item-caption> input')
            .should($input => {
                const val = $input.val();
                expect([
                    upcomingtasks[1][0],
                    upcomingtasks[1][1]
                ]).to.include(val);
            });
        cy.get('[data-cy="Upcoming Todos"]').children().eq(5)
            .find('.todo-item-caption> input')
            .should($input => {
                const val = $input.val();
                expect([
                    upcomingtasks[1][0],
                    upcomingtasks[1][1]
                ]).to.include(val);
            });

        cy.get('[data-cy="Upcoming Todos"]').children().eq(6)
            .contains(dayAfterTomorrow);

        cy.get('[data-cy="Upcoming Todos"]').children().eq(7)
            .find('.todo-item-caption> input')
            .should($input => {
                const val = $input.val();
                expect([
                    upcomingtasks[2][0],
                    upcomingtasks[2][1]
                ]).to.include(val);
            });
        cy.get('[data-cy="Upcoming Todos"]').children().eq(8)
            .find('.todo-item-caption> input')
            .should($input => {
                const val = $input.val();
                expect([
                    upcomingtasks[2][0],
                    upcomingtasks[2][1]
                ]).to.include(val);
            });

    });

})