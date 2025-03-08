import Todos from "./Todos";
import CreateTodo from "./CreateTodo";

export default function TaskBucket() {
  return (
    <>
      <CreateTodo />
      <Todos data-cy="todo-items" />
    </>
  );
}
