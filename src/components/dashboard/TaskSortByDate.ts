import dayjs from "dayjs";
import Todo from "../../dataModel/todo";

export const getTasksSortedByDate = (todoList: Todo[]) => {
    const unDoneTasks = todoList.filter((todo: Todo) => todo.completed === false);

    let unscheduledTasks: Todo[] = [];
    let todaysTasks: Todo[] = [];
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
        if (duedate.isSame(todaysDate, 'day')) {
            todaysTasks.push(todo);
        }
        if (duedate.isAfter(todaysDate, 'day')) {
            upcomingTasks.push(todo);
        }
    });

    return {
        todaysTasks,
        upcomingTasks,
        overDuedTasks,
        unscheduledTasks
    };
};
