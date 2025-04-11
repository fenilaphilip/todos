import dayjs from "dayjs";
import Todo from "../../dataModel/todo";

export const getTasksSortedByDate = (todoList: Todo[]) => {
    const unDoneTasks = todoList.filter((todo: Todo) => todo.completed === false);

    let unscheduledTasks: Todo[] = [];
    let scheduledTasks: { [key: string]: Todo[] } = {};
    let todaysTasks: Todo[] = [];

    const todaysDate = dayjs();

    unDoneTasks.forEach((todo: Todo) => {
        const duedate = dayjs(todo.dueDate);
        if (!duedate.isValid()) {
            unscheduledTasks.push(todo);
            return;
        }
        if (duedate.isSame(todaysDate, 'day')) {
            todaysTasks.push(todo);
            return;
        }

        const formattedDate = duedate.format('DD-MM-YYYY');
        if (scheduledTasks[formattedDate]) {
            scheduledTasks[formattedDate].push(todo);
        } else {
            scheduledTasks[formattedDate] = [todo];
        }
    });

    const scheduledSorted = Object.entries(scheduledTasks).map(
        ([date, tasks]) => ({ date, tasks })).sort(
            (a, b) => dayjs(a.date, "DD-MM-YYYY").valueOf() - dayjs(b.date, "DD-MM-YYYY").valueOf());

    // console.log(`from calender ${JSON.stringify(scheduledSorted)}`);

    let tasksOverdued: {
        date: string;
        tasks: Todo[];
    }[] = [];
    let upcomingTasks: {
        date: string;
        tasks: Todo[];
    }[] = [];

    scheduledSorted.forEach((item) => {
        if (dayjs(item.date, "DD-MM-YYYY").isBefore(todaysDate, 'day')) {
            tasksOverdued.push(item);
        } else {
            upcomingTasks.push(item);
        }
    });

    return {
        todaysTasks,
        upcomingTasks,
        tasksOverdued,
        unscheduledTasks
    };
};
