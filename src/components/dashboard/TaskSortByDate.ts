import dayjs from "dayjs";
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import Todo from "../../dataModel/todo";

export const getTasksSortedByDate = (todoList: Todo[]) => {
    const unDoneTasks = todoList.filter((todo: Todo) => todo.completed === false);

    let unscheduledTasks: Todo[] = [];
    let upcomingTasks: Todo[] = [];
    let overDuedTasks: Todo[] = [];

    const todaysDate = dayjs();

    unDoneTasks.forEach((todo: Todo) => {
        const duedate = dayjs(todo.dueDate);
        if (!duedate.isValid()) {
            unscheduledTasks.push(todo);
        }
        if (duedate.isBefore(todaysDate, 'day')) {
            overDuedTasks.push(todo);
        }

        dayjs.extend(isSameOrAfter);
        if (dayjs(duedate).isSameOrAfter(todaysDate, 'day')) {
            upcomingTasks.push(todo);
        }
    });

    return {
        upcomingTasks,
        overDuedTasks,
        unscheduledTasks
    };
};
