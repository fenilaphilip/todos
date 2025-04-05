import Todo from "../dataModel/todo";

export function storeTodoList(todos: Todo[]) {
    const todosJson = JSON.stringify(todos);
    console.debug(`from storeTodoList ${todosJson}`);
    window.localStorage.setItem("Todos", todosJson);
}

export function loadTodoList(): Todo[] {
    const todoList = JSON.parse(localStorage.getItem("Todos") || "[]");
    console.debug(`loadTodoList returning  ${todoList}`);
    return todoList;
}
export function storeLabels(labels: string[]) {
    const labelsJson = JSON.stringify(labels)
    console.debug(`storeLabels storing ${labelsJson}`)
    localStorage.setItem("Labels", labelsJson)

}
export function loadLabels(): string[] {
    var labelsJson = localStorage.getItem("Labels");
    if (!labelsJson) {
        const defaultLabels = ["Personal", "Work", "Leisure", "Others"];
        storeLabels(defaultLabels);
        console.debug(`loadLabels returning default labels`)
        return defaultLabels;
    }
    const labels = JSON.parse(labelsJson);
    console.debug(`loadLabels returning ${labels}`)
    return labels;
}