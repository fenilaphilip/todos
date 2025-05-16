import dayjs, { Dayjs } from "dayjs";
import Todo from "../../dataModel/todo";

export function findNextDueDate(todo: Todo): Dayjs | null {
    const today = dayjs();
    for (let i = 1; i <= 7; i++) {
        if (todo.repeats[today.add(i, 'day').day()]) {
            const nextDueDate = today.add(i, `day`);
            return nextDueDate;
        }
    }

    return null;
}