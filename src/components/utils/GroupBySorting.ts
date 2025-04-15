import dayjs from "dayjs";
import Todo from "../../dataModel/todo";

interface GroupedToDoItems {
    groupName: string;
    items: Todo[];
}

export function groupByNothing(items: Todo[], groupName: string): GroupedToDoItems[] {
    return [
        {
            groupName: groupName,
            items: items,
        },
    ];
}


export function groupByDueDate(items: Todo[]): GroupedToDoItems[] {
    const sortedItems = items.sort(
        (a, b) => dayjs(a.dueDate).valueOf() - dayjs(b.dueDate).valueOf()
    );

    let groupedItems: { [key: string]: Todo[] } = {};
    sortedItems.forEach((todoItem) => {
        const duedate = dayjs(todoItem.dueDate);
        const formattedDate = duedate.format("DD-MM-YYYY");
        if (groupedItems[formattedDate]) {
            groupedItems[formattedDate].push(todoItem);
        } else {
            groupedItems[formattedDate] = [todoItem];
        }
    });
    return Object.keys(groupedItems).map((key) => {
        return {
            groupName: key,
            items: groupedItems[key],
        };
    });
}

export function groupByPriority(items: Todo[]): GroupedToDoItems[] {
    return [];
}