import dayjs from "dayjs";
import Todo from "../../dataModel/todo";

export const getTasksSortedByDate = (todoList: Todo[]) => {
    const unDoneTasks = todoList.filter((todo: Todo) => todo.completed === false);

    let unscheduledTasks: Todo[] = [];
    let scheduledTasks: { [key: string]: Todo[] } = {};
    let todaysTasks: Todo[] = [];
    // let tasksOverdue: { [key: string]: Todo[] } = {};

    unDoneTasks.forEach((todo: Todo) => {
        const date = dayjs(todo.dueDate).format("DD-MM-YYYY");
        const todaysDate = dayjs().format("DD-MM-YYYY");
        if (date === "Invalid Date") {
            unscheduledTasks.push(todo);
            return;
        }
        if (date === todaysDate) {
            todaysTasks.push(todo);
            return;
        }
        if (scheduledTasks[date]) {
            scheduledTasks[date].push(todo);
        } else {
            scheduledTasks[date] = [todo];
        }
    });


    const scheduledTasksSortedByDate = Object.entries(scheduledTasks).map(([date, tasks]) => ({
        date,
        tasks
    })).sort((a, b) => dayjs(a.date, "DD-MM-YYYY").valueOf() - dayjs(b.date, "DD-MM-YYYY").valueOf());



    return {
        unscheduledTasks: unscheduledTasks,
        scheduledTasks,
        tasksCalender: scheduledTasksSortedByDate,
        todaysTasks: todaysTasks,
    };
};
