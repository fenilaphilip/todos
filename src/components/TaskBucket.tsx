import { useSelector } from "react-redux";
import { RootState } from "../store/todoStore";
import Dashboard from "./utils/Dashboard";

export default function TaskBucket() {
  const allTodos = useSelector((state: RootState) => state);
  const taskUncompleted = allTodos.filter((todo) => todo.completed === false);
  const completedtaskCount = allTodos.length - taskUncompleted.length;

  return (
    <Dashboard
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={allTodos}
      showLabel={true}
      showDuedate={true}
    />
  );
}
