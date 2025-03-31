import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import Dashboard from "../utils/Dashboard";

export const LabelLeisure: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const leisureCatergoryTodo = todolist.filter((todo) =>
    todo.labels?.includes("Leisure")
  );
  const taskUncompleted = leisureCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount =
    leisureCatergoryTodo.length - taskUncompleted.length;

  return (
    <Dashboard
      labelName="Leisure"
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={leisureCatergoryTodo}
      showLabel={false}
      showDuedate={true}
    />
  );
};
