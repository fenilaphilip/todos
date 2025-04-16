import { loadApp, addTask, addTasks, setDueDate } from './customFunctions.cy';
import * as dayjs from 'dayjs';

const upcomingtasks = [
    ['Do laundry', 'Buy Ticket for World cup Football'],
    ['Do grocery shopping', 'Wish birthday'],
    ['Order birthday gift', 'Buy playstation']
];
const unscheduledTask = ['Go to Gym', "Learn Driving"];
const overdueTasks = ['Replace water filter', 'Iron shirts']

describe('Task Calender page', () => {
    beforeEach(loadApp);
    beforeEach(() => {
        for (let i = 0; i < upcomingtasks.length; i++) {
            const date = dayjs().add(i, "day").format('MM/DD/YYYY');
            addTasks(upcomingtasks[i]);
            upcomingtasks[i].forEach((task) => setDueDate(task, date));
        }

        unscheduledTask.forEach((item) => addTask(item));

        for (let i = 0; i < overdueTasks.length; i++) {
            const date = dayjs().subtract(i, "day").format("MM/DD/YYYY");
            addTask(overdueTasks[i]);
            setDueDate(overdueTasks[i], date)
        }

        cy.visit('/calenderView');
    });

    const today = dayjs().format('DD-MM-YYYY');
    const tomorrow = dayjs().add(1, "day").format('DD-MM-YYYY');
    const dayAfterTomorrow = dayjs().add(2, "day").format('DD-MM-YYYY');

    it('Displays the tabs - upcoming , Overdue , Unscheduled', () => {

    });
})