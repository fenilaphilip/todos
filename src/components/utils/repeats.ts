import dayjs, { Dayjs } from "dayjs";
import Todo from "../../dataModel/todo";

export function findNextDueDate(todo: Todo): Dayjs | null {

    const previousDueDate: Dayjs = findPreviousDueDate(todo);

    for (let i = 1; i <= 7; i++) {
        if (todo.repeats[previousDueDate.add(i, 'day').day()]) {
            const nextDueDate = previousDueDate.add(i, `day`);
            return nextDueDate;
        }
    }

    return null;
}

function findPreviousDueDate(todo: Todo): Dayjs {
    const currentday = dayjs();

    if (todo.dueDate === null || dayjs(todo.dueDate).isSame(currentday, 'day') || dayjs(todo.dueDate).isBefore(currentday, 'day')) {
        return currentday;
    } else {
        return dayjs(todo.dueDate);
    }
}