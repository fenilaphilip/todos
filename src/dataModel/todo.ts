import { Dayjs } from "dayjs";

export enum Priority {
    None,
    Low,
    Medium,
    High
}

interface Todo {
    id: string;
    caption: string;
    description: string;
    priority?: Priority | null;
    labels?: string | null;
    dueDate?: Dayjs | null;
    completed: boolean;
}

export default Todo;