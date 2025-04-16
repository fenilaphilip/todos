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
})