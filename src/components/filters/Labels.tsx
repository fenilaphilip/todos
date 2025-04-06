import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import Dashboard from "../utils/Dashboard";
import { useParams } from "react-router-dom";

export default function Labels() {
  const todolist = useSelector((state: RootState) => state.TODOS);
  const { labelName } = useParams();

  const catergoryTodo = todolist.filter((todo) =>
    todo.labels?.includes(`${labelName}`)
  );
  const taskUncompleted = catergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount = catergoryTodo.length - taskUncompleted.length;

  return (
    <Dashboard
      labelName={labelName}
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={catergoryTodo}
      showLabel={false}
      showDuedate={true}
    />
  );
}
