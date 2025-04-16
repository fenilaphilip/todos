import { useSelector } from "react-redux";
import { RootState } from "../../store/todoStore";
import Dashboard from ".././utils/Dashboard";
import Todo from "../../dataModel/todo";

export default function TaskBucket() {
  const allTodos = useSelector((state: RootState) => state.TODOS);
  const taskUncompleted = allTodos.filter(
    (todo: Todo) => todo.completed === false
  );
  const completedtaskCount = allTodos.length - taskUncompleted.length;

  return (
    <Dashboard
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={allTodos}
      showLabel
      showDuedate
      showPrint
    />
  );
}
