import { Dayjs } from "dayjs";

export enum Priority {
    Low,
    Medium,
    High
}

interface Todo {
    id: string;
    caption: string;
    description: string;
    priority: Priority;
    labels?: string[];
    dueDate?: Dayjs | null;
    completed: boolean;
}

export default Todo;

export interface StorageModel {
    todos: Todo[],
    labels: string[]
}