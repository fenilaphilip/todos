import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import Dashboard from "../utils/Dashboard";
import { Chip } from "@mui/material";

export const ActiveTaskCount: React.FC<{ labelName: string }> = ({
  labelName,
}) => {
  const todolist = useSelector((state: RootState) => state.todoReducer);
  const catergoryTodo = todolist.filter((todo) =>
    todo.labels?.includes(`${labelName}`)
  );
  const taskUncompleted = catergoryTodo.filter(
    (todo) => todo.completed === false
  );

  return <Chip label={taskUncompleted.length} size="small" color="primary" />;
};

export const Labels: React.FC<{ labelName: string }> = ({ labelName }) => {
  const todolist = useSelector((state: RootState) => state.todoReducer);
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
};
