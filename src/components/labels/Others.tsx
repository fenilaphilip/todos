import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import Dashboard from "../utils/Dashboard";

export const LabelOthers: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const otherCatergoryTodo = todolist.filter((todo) =>
    todo.labels?.includes("Others")
  );
  const taskUncompleted = otherCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount = otherCatergoryTodo.length - taskUncompleted.length;
  return (
    <Dashboard
      labelName="Other"
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={otherCatergoryTodo}
      showLabel={false}
      showDuedate={true}
    />
  );
};
