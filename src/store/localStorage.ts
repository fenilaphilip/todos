import Todo from "../dataModel/todo";

export function storeTodoList(todos: Todo[]) {
    // console.debug(`from storeTodoList ${todos}`);
    window.localStorage.setItem("Todos", JSON.stringify(todos));

}

export function loadTodoList(): Todo[] {
    const todoList = JSON.parse(localStorage.getItem("Todos") || "[]");
    // console.debug(`from loadTodoList ${todoList}`);
    return todoList;
}
