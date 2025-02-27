
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
    dueDate: Date;
    completed: boolean;
}

export default Todo;