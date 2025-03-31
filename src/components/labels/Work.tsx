import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import Dashboard from "../utils/Dashboard";

export const LabelWork: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const workCatergoryTodo = todolist.filter((todo) =>
    todo.labels?.includes("Work")
  );
  const taskUncompleted = workCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount = workCatergoryTodo.length - taskUncompleted.length;
  return (
    <>
      <Dashboard
        labelName="Work"
        completedtaskCount={completedtaskCount}
        undoneTasks={taskUncompleted}
        alltasks={workCatergoryTodo}
        showLabel={false}
        showDuedate={true}
      />
    </>
  );
};
