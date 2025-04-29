import { loadApp, addTask, addTasks, setDueDate } from './customFunctions.cy';
import * as dayjs from 'dayjs';

const upcomingtasks = [
    ['Do laundry', 'Buy Ticket for World cup Football'],
    ['Do grocery shopping', 'Wish birthday'],
];
const unscheduledTasks = ['Go to Gym', "Learn Driving"];
const overdueTasks = ['Replace water filter', 'Iron shirts'];
const todaysTasks = ['Empty wastebin', 'Water Plants'];

const upcomingTasksCount = upcomingtasks.length * 2;
const unscheduledTasksCount = unscheduledTasks.length;
const overdueTasksCount = overdueTasks.length;
const todaysTasksCount = todaysTasks.length;

const dayBeforeYesterday = dayjs().subtract(2, "day").format('DD-MM-YYYY');
const yesterday = dayjs().subtract(1, "day").format('DD-MM-YYYY');
const today = dayjs().format(`MM/DD/YYYY`);
const tomorrow = dayjs().add(1, "day").format('DD-MM-YYYY');
const dayAfterTomorrow = dayjs().add(2, "day").format('DD-MM-YYYY');

describe('Task Calender page', () => {
    beforeEach(loadApp);
    beforeEach(() => {
        for (let i = 0; i < todaysTasksCount; i++) {
            addTask(todaysTasks[i]);
            setDueDate(todaysTasks[i], today);
        }

        for (let i = 0; i < upcomingTasksCount / 2; i++) {
            const date = dayjs().add(i + 1, "day").format('MM/DD/YYYY');
            addTasks(upcomingtasks[i]);
            upcomingtasks[i].forEach((task) => setDueDate(task, date));
        }

        unscheduledTasks.forEach((item) => addTask(item));

        for (let i = 0; i < overdueTasksCount; i++) {
            const date = dayjs().subtract(i + 1, "day").format("MM/DD/YYYY");
            addTask(overdueTasks[i]);
            setDueDate(overdueTasks[i], date);
        }

        cy.visit('/calenderView');
    });

    it('Displays the tabs- Today, Upcoming, Overdue, Unscheduled and task count of each', () => {
        cy.get('[data-cy="calender-sub-division"]').children()
            .should("contain", "Today")
            .and("contain", "Upcoming")
            .and("contain", "Overdue")
            .and("contain", "Unscheduled");

        cy.get(`[data-cy="Upcoming"]`).contains(upcomingTasksCount);
        cy.get(`[data-cy="Overdue"]`).contains(overdueTasksCount);
        cy.get(`[data-cy="Unscheduled"]`).contains(unscheduledTasksCount);
    });

    it('"Today Tab" shows tasks for today', () => {
        cy.visit('/calenderView/Today');
        cy.get(`[data-cy="Todays Todos"]`).children().should('length', 2)

        cy.get('[data-cy="Todays Todos"]').children().eq(0)
            .find('.todo-item-caption> input')
            .should($input => {
                const val = $input.val();
                expect([
                    todaysTasks[0],
                    todaysTasks[1]
                ]).to.include(val);
            });
        cy.get('[data-cy="Todays Todos"]').children().eq(1)
            .find('.todo-item-caption> input')
            .should($input => {
                const val = $input.val();
                expect([
                    todaysTasks[0],
                    todaysTasks[1]
                ]).to.include(val);
            });
    });

    it('"Upcoming tab" shows tasks upcoming tasks, dates in accending order', () => {
        cy.visit('/calenderView/Upcoming');

        cy.get(`[data-cy="Upcoming Todos"]`).children().should('length', 6);
        cy.log('tasks-4 and 2 -date heading  gives 6 children');

        cy.get('[data-cy="Upcoming Todos"]').children().eq(0)
            .contains(tomorrow);

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
            .contains(dayAfterTomorrow);

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

    });

    it('"Overdue tab" shows pending tasks with date as heading', () => {
        cy.visit('/calenderView/Overdue');

        cy.get(`[data-cy="Overdue Todos"]`).children().should('length', 4);
        cy.log('tasks-2 and 2 -date heading  gives 4 children');

        cy.get('[data-cy="Overdue Todos"]').children().eq(0)
            .contains(dayBeforeYesterday);

        cy.get('[data-cy="Overdue Todos"]').children().eq(1)
            .find('.todo-item-caption> input')
            .should('have.value', overdueTasks[1])

        cy.get('[data-cy="Overdue Todos"]').children().eq(2)
            .contains(yesterday);

        cy.get('[data-cy="Overdue Todos"]').children().eq(3)
            .find('.todo-item-caption> input')
            .should('have.value', overdueTasks[0]);
    });

    it('"Unscheduled tab" shows unscheduled tasks', () => {
        cy.visit('/calenderView/Unscheduled');

        cy.get(`[data-cy="Unscheduled Todos"]`).children().should('length', 2);
        cy.log('tasks-2');

        cy.get('[data-cy="Unscheduled Todos"]').children().eq(0)
            .find('.todo-item-caption> input')
            .should('have.value', unscheduledTasks[1])


        cy.get('[data-cy="Unscheduled Todos"]').children().eq(1)
            .find('.todo-item-caption> input')
            .should('have.value', unscheduledTasks[0]);
    });

})