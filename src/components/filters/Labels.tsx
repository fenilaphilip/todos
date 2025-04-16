import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TaskList from "../utils/TaskList";
import CreateTodo from "../utils/CreateTodo";
import { Box } from "@mui/material";

export default function Labels() {
  const todolist = useSelector((state: RootState) => state.TODOS);
  const { labelName } = useParams();

  const catergoryTodo = todolist.filter((todo) =>
    todo.labels?.includes(`${labelName}`)
  );
  const taskUncompleted = catergoryTodo.filter((todo) => !todo.completed);

  return (
    <Box marginTop={2}>
      <CreateTodo labelName={labelName} />
      <div data-cy="todo-items">
        <TaskList items={taskUncompleted} showLabel showDuedate showPrint />
      </div>
    </Box>
  );
}
