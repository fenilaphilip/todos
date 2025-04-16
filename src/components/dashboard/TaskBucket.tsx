import { useSelector } from "react-redux";
import { RootState } from "../../store/todoStore";
import CreateTodo from "../utils/CreateTodo";
import { Box } from "@mui/material";
import TaskList from "../utils/TaskList";
import Todo from "../../dataModel/todo";

export default function TaskBucket() {
  const allTodos = useSelector((state: RootState) => state.TODOS);
  const taskUncompleted = allTodos.filter((todo: Todo) => !todo.completed);

  return (
    <Box marginTop={2}>
      <CreateTodo />
      <div data-cy="todo-items">
        <TaskList items={taskUncompleted} showLabel showDuedate showPrint />
      </div>
    </Box>
  );
}
