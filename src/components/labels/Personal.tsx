import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import Dashboard from "../utils/Dashboard";
import { Chip } from "@mui/material";

export const LabelPersonal: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const personalCatergoryTodo = todolist.filter((todo) =>
    todo.labels?.includes("Personal")
  );
  const taskUncompleted = personalCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  const completedtaskCount =
    personalCatergoryTodo.length - taskUncompleted.length;

  return (
    <Dashboard
      labelName="Personal"
      completedtaskCount={completedtaskCount}
      undoneTasks={taskUncompleted}
      alltasks={personalCatergoryTodo}
      showLabel={false}
      showDuedate={true}
    />
  );
};

export const PersonalActiveTaskCount: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const personalCatergoryTodo = todolist.filter((todo) =>
    todo.labels?.includes("Personal")
  );
  const taskUncompleted = personalCatergoryTodo.filter(
    (todo) => todo.completed === false
  );
  return <Chip label={taskUncompleted.length} size="small" color="primary" />;
};
