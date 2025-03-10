import { Dayjs } from "dayjs";

export enum Priority {
    None,
    Low,
    Medium,
    High
}
export enum Labels {
    Leisure,
    Personal,
    Work,
    Other,
}

interface Todo {
    id: string;
    caption: string;
    description: string;
    priority: Priority;
    labels: Labels;
    dueDate?: Dayjs | null;
    completed: boolean;
}

export default Todo;