import React from "react";
import type { RootState } from "../../store/todoStore";
import { useSelector } from "react-redux";
import TodoItem from "../utils/TodoItem";
import { Chip, Typography } from "@mui/material";

export const NonePriorityTasks: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const nonePriorityTodo = todolist.filter(
    (todo) => todo.priority === null && todo.completed === false
  );
  const nonePriorityTaskCount = nonePriorityTodo.length;

  return (
    <>
      {todolist.length === 0 && (
        <Typography variant="h6">Your Task Bucket is empty!</Typography>
      )}
      {todolist.length !== 0 && nonePriorityTaskCount === 0 && (
        <Typography variant="h6">There is nothing to show!</Typography>
      )}
      {nonePriorityTaskCount !== 0 &&
        nonePriorityTodo.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              showLabel={false}
              showDuedate={true}
            />
          );
        })}
    </>
  );
};

export const NonePriorityTaskCount: React.FC = () => {
  const todolist = useSelector((state: RootState) => state);
  const nonePriorityTodo = todolist.filter(
    (todo) => todo.priority === null && todo.completed === false
  );

  return <Chip label={nonePriorityTodo.length} size="small" color="primary" />;
};
